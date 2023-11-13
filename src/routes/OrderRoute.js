const express = require("express");
const OrderRouter = express.Router();
const OrderController = require("../controllers/OrderController");

OrderRouter.post("/", OrderController.createOrder);

module.exports = OrderRouter;
