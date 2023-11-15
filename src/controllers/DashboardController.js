const { Order, Supply_Order, Warehouse, Item, Customer } = require("../models")

const showDashboard = async (req, res, next) => {
    try {

        let totalRevenues = 0
        let totalExpenses = 0

        const foundRevenue = await Order.findAll()
        foundRevenue.map((data) => totalRevenues += data.total_price)

        const foundExpenses = await Supply_Order.findAll()
        foundExpenses.map((data) => totalExpenses += data.total_price)

        const { count: totalWarehouses, } = await Warehouse.findAndCountAll()

        const { count: totalItems } = await Item.findAndCountAll()

        const { count: totalCustomers } = await Customer.findAndCountAll()

        const { count: totalOrders } = await Order.findAndCountAll()

        res.status(200).json({ status: true, total_revenues: totalRevenues, total_expenses: totalExpenses, total_warehouses: totalWarehouses, total_products: totalItems, total_customers: totalCustomers, total_orders: totalOrders })

    } catch (error) {
        next(error)
    }

}

module.exports = { showDashboard }