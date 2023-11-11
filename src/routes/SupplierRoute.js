const express = require("express");
const SupplierRoute = express.Router();
const SupplierController = require("../controllers/SupplierController");

SupplierRoute.post("/", SupplierController.addSupplier);
SupplierRoute.get("/", SupplierController.getAllSupplier);
SupplierRoute.get("/:id", SupplierController.getSupplierbyId);
SupplierRoute.put("/:id", SupplierController.updateSupplier);
SupplierRoute.delete("/:id", SupplierController.deleteSupplier);

module.exports = SupplierRoute;