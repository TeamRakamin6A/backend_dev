const { Op } = require("sequelize");
const { Warehouse, Item_Warehouse, Item } = require("../models");

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
    const title = req.query.title || "";
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

    res.status(200).json({
      success: true,
      totalData: count,
      totalPage: Math.ceil(count / limit),
      currenPage: page,
      data: rows,
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
    const foundWarehouse = await Warehouse.findOne({ where: { id } });
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
};
