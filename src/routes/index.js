const express = require("express");
const router = express.Router();
const UserRouter = require("./UserRoute");
const UsersController = require("../controllers/UserController");
const WarehouseRouter = require("./WarehouseRoute");
const authMiddleware = require("../middlewares/AuthMiddleware");

router.post("/api/users/login", UsersController.loginUser);
router.post("/api/users/register", UsersController.registerUser);
router.use(authMiddleware);

router.use("/api/users", UserRouter);
router.use("/api/warehouses", WarehouseRouter);

module.exports = router;
