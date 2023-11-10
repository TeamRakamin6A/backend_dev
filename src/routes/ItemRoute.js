const express = require("express");
const ItemRoute = express.Router();
const ItemController = require("../controllers/ItemController");
const multer = require("multer");
const diskStorage = require("../middlewares/multer")

ItemRoute.post("/", ItemController.addItem);
ItemRoute.get("/", ItemController.getItems);
ItemRoute.get("/:id", ItemController.getItemID);
ItemRoute.get("/title", ItemController.filterTitle);
ItemRoute.put("/:id", ItemController.updateItem);
ItemRoute.put("/upload/:id", multer({storage: diskStorage}).single("image"), ItemController.uploadImage);
ItemRoute.delete("/:id", ItemController.deleteItem);

module.exports = ItemRoute; 