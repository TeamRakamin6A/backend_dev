const express = require("express");
const ItemRoute = express.Router();
const ItemController = require("../controllers/ItemController");

ItemRoute.post("/", ItemController.addItem);
ItemRoute.put("/:id", ItemController.updateItem);
ItemRoute.delete("/:id", ItemController.deleteItem);

module.exports = ItemRoute;