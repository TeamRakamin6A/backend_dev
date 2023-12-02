const express = require('express');
const SupplyOrderRoute = express.Router();
const SupplyOrderController = require("../controllers/SupplyOrderController");
const { authorization } = require('../middlewares/AuthMiddleware');

SupplyOrderRoute.post("/", authorization, SupplyOrderController.createSupplyOrder);
SupplyOrderRoute.get("/", SupplyOrderController.getSupplyOrder);
SupplyOrderRoute.get("/:id", SupplyOrderController.getSupplyOrderDetail);
SupplyOrderRoute.put("/:id", authorization, SupplyOrderController.updateSupplyOrder);
SupplyOrderRoute.delete("/:id", authorization, SupplyOrderController.deleteSupplyOrder);

module.exports = SupplyOrderRoute;