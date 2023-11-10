const express = require("express");
const WarehoseController = require("../controllers/WarehouseController");
const WarehouseRouter = express.Router();

WarehouseRouter.post("/", WarehoseController.createWarehouse);

module.exports = WarehouseRouter;
