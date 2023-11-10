const { Warehouse } = require("../models");

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

module.exports = { createWarehouse };
