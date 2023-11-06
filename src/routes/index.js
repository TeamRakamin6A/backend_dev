const express = require("express");
const router = express.Router();
const UserRouter = require("./UserRoute");

router.use("/api/users", UserRouter);

module.exports = router;
