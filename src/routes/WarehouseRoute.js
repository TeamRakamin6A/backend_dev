const express = require("express");
const WarehoseController = require("../controllers/WarehouseController");
const WarehouseRouter = express.Router();

WarehouseRouter.post("/", WarehoseController.createWarehouse);
WarehouseRouter.get("/", WarehoseController.getAllWarehouses);
WarehouseRouter.put("/:id", WarehoseController.updateWarehouseById);
WarehouseRouter.put(
  "/quantities/:id",
  WarehoseController.updateQuantityByWarehouse
);
WarehouseRouter.post("/addItem/:id", WarehoseController.addItemToWarehouse);
WarehouseRouter.post("/moves", WarehoseController.moveQuantityToWarehouse);
WarehouseRouter.get("/:id", WarehoseController.getWarehouseById);
WarehouseRouter.delete("/:id", WarehoseController.deleteWarehouseById);

module.exports = WarehouseRouter;
