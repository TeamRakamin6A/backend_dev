const express = require("express");
const OrderRouter = express.Router();
const OrderController = require("../controllers/OrderController");

OrderRouter.get("/", OrderController.createOrder);

module.exports = OrderRouter;
