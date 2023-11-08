const express = require("express");
const router = express.Router();
const UserRouter = require("./UserRoute");
const SupplierRouter = require("./SupplierRoute");
const CustomerRouter = require("./CustomerRoute");
const ItemRouter = require("./ItemRoute");
const UsersController = require("../controllers/UserController");
const WarehouseRouter = require("./WarehouseRoute");
const authMiddleware = require("../middlewares/AuthMiddleware");

router.post("/api/users/login", UsersController.loginUser);
router.post("/api/users/register", UsersController.registerUser);

router.use(authMiddleware);

router.use("/api/users", UserRouter);
router.use("/api/customers", CustomerRouter);
router.use("/api/suppliers", SupplierRouter);
router.use("/api/warehouses", WarehouseRouter);
router.use("/api/items", ItemRouter)

module.exports = router;
