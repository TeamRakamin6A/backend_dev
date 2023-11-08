const express = require("express");
const ItemRoute = express.Router();
const ItemController = require("../controllers/ItemController");

ItemRoute.post("/", ItemController.addItem);

module.exports = ItemRoute;