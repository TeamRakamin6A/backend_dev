const express = require("express");
const CustomerRoute = express.Router();
const CustomerController = require("../controllers/CustomerController");

CustomerRoute.post("/", CustomerController.addCustomer);
CustomerRoute.get("/:id", CustomerController.getCustomerbyId);
CustomerRoute.get("/", CustomerController.getAllCustomer);
CustomerRoute.put("/:id", CustomerController.updateCustomer);
CustomerRoute.delete("/:id", CustomerController.deleteCustomer);

module.exports = CustomerRoute;
