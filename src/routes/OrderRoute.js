const express = require("express");
const OrderRouter = express.Router();
const OrderController = require("../controllers/OrderController");
const { authorization } = require("../middlewares/AuthMiddleware");

OrderRouter.post("/", authorization, OrderController.createOrder);
OrderRouter.get("/", OrderController.getAllOrder)
OrderRouter.get('/:id', OrderController.getOrderById)
OrderRouter.put('/:id', authorization, OrderController.updateOrder)
OrderRouter.delete('/:id', authorization, OrderController.deleteOrder)


module.exports = OrderRouter;
