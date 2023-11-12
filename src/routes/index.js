const express = require("express");
const router = express.Router();
const UserRouter = require("./UserRoute");
const CustomerRouter = require("./CustomerRoute");
const OrderRouter = require("../controllers/OrderController");
const UsersController = require("../controllers/UserController");
const authMiddleware = require("../middlewares/AuthMiddleware");

router.post("/api/users/login", UsersController.loginUser);
router.post("/api/users/register", UsersController.registerUser);

router.use(authMiddleware);

router.use("/api/users", UserRouter);
router.use("/api/customers", CustomerRouter);
router.use("/api/orders", OrderRouter);

module.exports = router;
