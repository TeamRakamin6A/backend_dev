const express = require("express");
const OrderRouter = express.Router();
const OrderController = require("../controllers/OrderController");

OrderRouter.post("/", OrderController.createOrder);
OrderRouter.get("/", OrderController.getAllOrder)
OrderRouter.get('/:id', OrderController.getOrderById)

module.exports = OrderRouter;
