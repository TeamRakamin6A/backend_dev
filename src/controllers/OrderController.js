const { Order, Order_Item } = require("../models");

const createOrder = async (req, res, next) => {
    try {
        const {
            invoice,
            total_price,
            warehouse_id,
            customer_id,
            status,
            order_item,
        } = req.body;

        const order = await Order.Create({
            invoice,
            total_price,
            warehouse_id,
            customer_id,
            status,
        }, { returning: true });

        for (let i = 0; i < order_item.length; i++) {
            const orderItem = order_item[i];

            console.log(orderItem);

            const foundOrderItem = await Order_Item.findOne({
                where: { id: orderItem.id }
            })

            if (!foundOrderItem) throw { name: "errorNotFound" }

            await Order_Item.create({
                order_id: order.id,
                item_id: orderItem.id
            })
        }
    } catch (error) {
        next(error);
    }
};

const getAllOrder = (req, res, next) => { };

const getOrderById = (req, res, next) => { };

const updateOrder = (req, res, next) => { };

const deleteOrder = (req, res, next) => { };

module.exports = {
    createOrder,
    getAllOrder,
    getOrderById,
    updateOrder,
    deleteOrder,
};
