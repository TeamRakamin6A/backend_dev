const { Op, where } = require("sequelize");
const { Warehouse, Item_Warehouse, Item, sequelize } = require("../models");

const createWarehouse = async (req, res, next) => {
  try {
    const { title, address } = req.body;
    const data = await Warehouse.create({ title, address });

    res
      .status(201)
      .json({ success: true, message: "Warehouse Created Successfully", data });
  } catch (error) {
    next(error);
  }
};

const getAllWarehouses = async (req, res, next) => {
  try {
    const page = +req.query.page || 1;
    const limit = +req.query.limit || 10;
    const title = req.query.q || "";
    const low_stock = req.query.low_stock;
    const offset = limit * (page - 1);

    let filterOption;

    if (low_stock) {
      filterOption = {
        include: {
          model: Item_Warehouse,
          where: {
            quantity: {
              [Op.lt]: low_stock,
            },
          },
          include: {
            model: Item,
          },
        },
      };
    }

    const { count, rows } = await Warehouse.findAndCountAll({
      ...filterOption,
      where: {
        title: {
          [Op.iLike]: `%${title}%`,
        },
      },
      offset,
      limit,
    });

    const totalPage = Math.ceil(count / limit);
    const nextPage = page < totalPage ? page + 1 : null;
    const prevPage = page > 1 ? page - 1 : null;

    res.status(200).json({
      success: true,
      totalData: count,
      totalPage,
      prevPage,
      nextPage,
      currentPage: page,
      data: rows,
    });
  } catch (error) {
    next(error);
  }
};

const moveQuantityToWarehouse = async (req, res, next) => {
  const t = await sequelize.transaction();
  try {
    const { item_id, stock, initial_warehouse_id, destination_warehouse_id } =
      req.body;

    const foundInitWarehouse = await Warehouse.findOne({
      where: { id: +initial_warehouse_id },
    });

    const foundDestWarehouse = await Warehouse.findOne({
      where: { id: +destination_warehouse_id },
    });

    if (!foundDestWarehouse || !foundInitWarehouse)
      throw { name: "errorNotFound" };

    const initStock = await Item_Warehouse.findOne({
      where: {
        [Op.and]: [{ item_id }, { warehouse_id: foundInitWarehouse.id }],
      },
      transaction: t,
    });

    if (initStock.quantity < stock) {
      t.rollback();
      throw { name: "lessStockItems" };
    }

    await initStock.decrement("quantity", {
      by: +stock,
      transaction: t,
    });

    let destStock = await Item_Warehouse.findOne({
      where: {
        [Op.and]: [{ item_id }, { warehouse_id: foundDestWarehouse.id }],
      },
      transaction: t,
    });

    if (!destStock) {
      destStock = await Item_Warehouse.create(
        {
          item_id,
          warehouse_id: foundDestWarehouse.id,
          quantity: +stock,
        },
        { transaction: t }
      );
    } else {
      await destStock.increment("quantity", {
        by: +stock,
        transaction: t,
      });
    }

    await t.commit();
    res
      .status(200)
      .json({ status: true, message: "Product moved successfully" });
  } catch (error) {
    await t.rollback();
    next(error);
  }
};

const updateQuantityByWarehouse = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { quantity, item_id } = req.body;

    const findItemsWarehouse = await Item_Warehouse.findOne({
      where: { [Op.and]: [{ warehouse_id: id }, { item_id: +item_id }] },
    });
    if (!findItemsWarehouse) throw { name: "errorNotFound" };

    const updateQuantity = await findItemsWarehouse.update(
      { quantity },
      {
        returning: true,
      }
    );

    res.status(200).json({
      status: true,
      message: "Item Quantity Successfully Updated",
      data: updateQuantity,
    });
  } catch (error) {
    next(error);
  }
};

const updateWarehouseById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { title, address } = req.body;

    const foundWarehouse = await Warehouse.findOne({ where: { id } });
    if (!foundWarehouse) throw { name: "errorNotFound" };

    const updateWarehouse = await foundWarehouse.update({ title, address });

    res.status(200).json({
      status: true,
      message: "Warehouse Successfully Updated",
      data: updateWarehouse,
    });
  } catch (error) {
    next(error);
  }
};

const getWarehouseById = async (req, res, next) => {
  try {
    const { id } = req.params;

    const foundWarehouse = await Warehouse.findOne({
      include: {
        model: Item,
      },
      where: { id },
    });

    if (!foundWarehouse) {
      throw { name: "errorNotFound" };
    }

    res.status(200).json({ status: true, data: foundWarehouse });
  } catch (error) {
    next(error);
  }
};

const deleteWarehouseById = async (req, res, next) => {
  try {
    const { id } = req.params;

    const foundWarehouse = await Warehouse.findOne({ where: { id } });
    if (!foundWarehouse) throw { name: "errorNotFound" };

    await foundWarehouse.destroy();

    res.status(200).json({
      success: true,
      message: "Warehouse Successfully Deleted",
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createWarehouse,
  getAllWarehouses,
  getWarehouseById,
  deleteWarehouseById,
  updateWarehouseById,
  updateQuantityByWarehouse,
  moveQuantityToWarehouse,
};
