const express = require('express');
const SupplyOrderRoute = express.Router();
const SupplyOrderController = require("../controllers/SupplyOrderController");

SupplyOrderRoute.post("/", SupplyOrderController.createSupplyOrder);
SupplyOrderRoute.get("/", SupplyOrderController.getSupplyOrder);
SupplyOrderRoute.get("/:id", SupplyOrderController.getSupplyOrderDetail);
SupplyOrderRoute.put("/:id", SupplyOrderController.updateSupplyOrder);
SupplyOrderRoute.delete("/:id", SupplyOrderController.deleteSupplyOrder);

module.exports = SupplyOrderRoute;