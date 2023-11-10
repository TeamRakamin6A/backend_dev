const { Customer } = require("../models");
const { Op } = require("sequelize");

const addCustomer = async (req, res, next) => {
  try {
    const { name, address, phone_number, email } = req.body;

    await Customer.create({ name, address, phone_number, email });

    res
      .status(200)
      .json({ status: true, message: "Customer Created Successfully" });
  } catch (error) {
    console.log(error.name);
    next(error);
  }
};

const getAllCustomer = async (req, res, next) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const nameFilter = req.query.name || "";

    const offset = (page - 1) * limit;

    const { count, rows: customers } = await Customer.findAndCountAll({
      where: {
        name: {
          [Op.iLike]: `%${nameFilter}%`,
        },
      },
      offset,
      limit,
    });

    const totalPages = Math.ceil(count / limit);

    const nextPage = page < totalPages ? page + 1 : null;
    const prevPage = page > 1 ? page - 1 : null;

    const paginationInfo = {
      totalItems: count,
      totalPages,
      currentPage: page,
      nextPage,
      prevPage,
      items: customers,
    };

    return res.status(200).json(paginationInfo);
  } catch (err) {
    next(err);
  }
};

const getCustomerbyId = async (req, res, next) => {
  try {
    const customer = await Customer.findByPk(req.params.id);
    if (!customer) {
      throw { name: "ErrorNotFound" };
    }
    return res.status(200).json({ data: customer });
  } catch (error) {
    next(error);
  }
};

const updateCustomer = async (req, res, next) => {
  try {
    const { name, address, phone_number, email } = req.body;
    const { id } = req.params;

    const customer = await Customer.findOne({
      where: {
        id,
      },
    });

    if (!customer) {
      throw { name: "ErrorNotFound" };
    }

    await Customer.update(
      {
        name: name || customer.name,
        address: address || customer.address,
        phone_number: phone_number || customer.phone_number,
        email: email || customer.email,
      },
      {
        where: {
          id,
        },
        returning: true,
      }
    );

    res.status(200).json({
      message: "Customer Updated Successfully",
      data: customer,
    });
  } catch (err) {
    next(err);
  }
};

const deleteCustomer = async (req, res, next) => {
  try {
    const findCustomer = await Customer.findByPk(req.params.id);
    if (!findCustomer) {
      throw { name: "ErrorNotFound" };
    }
    await findCustomer.destroy();
    return res.status(200).json({ message: "Detele Successfully" });
  } catch (err) {
    next(err);
  }
};

module.exports = {
  addCustomer,
  getCustomerbyId,
  getAllCustomer,
  updateCustomer,
  deleteCustomer,
};
