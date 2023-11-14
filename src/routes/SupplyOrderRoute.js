const express = require('express');
const SupplyOrderRoute = express.Router();
const SupplyOrderController = require("../controllers/SupplyOrderController");

SupplyOrderRoute.post("/", SupplyOrderController.createSupplyOrder);

module.exports = SupplyOrderRoute;