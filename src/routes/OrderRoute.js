const express = require("express");
const OrderRouter = express.Router();
const OrderController = require("../controllers/OrderController");

OrderRouter.post("/", OrderController.createOrder);
OrderRouter.get("/", OrderController.getAllOrder)
OrderRouter.get('/:id', OrderController.getOrderById)
OrderRouter.put('/', OrderController.updateOrder)
OrderRouter.delete('/:id', OrderController.deleteOrder)
OrderRouter.get("/invoice",OrderController.createInvoice)


module.exports = OrderRouter;
