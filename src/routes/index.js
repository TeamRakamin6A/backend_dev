const express = require("express");
const router = express.Router();
const UserRouter = require("./UserRoute");
const SupplierRouter = require("./SupplierRoute");
const CustomerRouter = require("./CustomerRoute");
const OrderRouter = require("./OrderRoute");
const ItemRouter = require("./ItemRoute");
const UsersController = require("../controllers/UserController");
const CategoryRouter = require('./CategoryRoute')
const WarehouseRouter = require("./WarehouseRoute");
const DashboardRouter = require("./DashboardRoute")
const { authMiddleware } = require("../middlewares/AuthMiddleware");
const SupplyOrders = require("./SupplyOrderRoute");

router.post("/api/users/login", UsersController.loginUser);
router.post("/api/users/register", UsersController.registerUser);
router.put("/api/users", UsersController.updateUser);

router.use(authMiddleware);

router.use("/api/users", UserRouter);
router.use("/api/customers", CustomerRouter);
router.use("/api/categories", CategoryRouter);
router.use("/api/suppliers", SupplierRouter);
router.use("/api/warehouses", WarehouseRouter);
router.use("/api/orders", OrderRouter);
router.use("/api/dashboards", DashboardRouter);
router.use("/api/items", ItemRouter)
router.use("/api/supplyorders", SupplyOrders);

module.exports = router;
