const express = require("express")
const DashboardRouter = express.Router()
const DashboardController = require("../controllers/DashboardController")

DashboardRouter.get('/', DashboardController.showDashboard)

module.exports = DashboardRouter