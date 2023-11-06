const express = require("express");
const UserRouter = express.Router();
const UsersController = require("../controllers/UserController");
const authMiddleware = require("../middlewares/AuthMiddleware");

UserRouter.post("/login", UsersController.loginUser);
UserRouter.post("/register", UsersController.registerUser);
UserRouter.put("/", UsersController.updateUser);
UserRouter.use(authMiddleware);
UserRouter.get("/:id", UsersController.getUserbyId);
UserRouter.get("/", UsersController.getUserLogin);

module.exports = UserRouter;
