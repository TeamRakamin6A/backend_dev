const express = require("express");
const UserRouter = express.Router();
const UsersController = require("../controllers/UserController");

UserRouter.get("/:id", UsersController.getUserLogin);
UserRouter.get("/", UsersController.getUserLogin);
UserRouter.post("/login", UsersController.loginUser);
UserRouter.post("/register", UsersController.registerUser);
UserRouter.put("/", UsersController.updateUser);

module.exports = UserRouter;
