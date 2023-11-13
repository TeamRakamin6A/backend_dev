
const { Order, Order_Item, Item, sequelize } = require("../models");

const createOrder = async (req, res, next) => {
    const t = await sequelize.transaction()
    try {
        const {
            invoice,
            total_price,
            warehouse_id,
            customer_id,
            status,
            item,
        } = req.body;

        const order = await Order.create({
            invoice,
            total_price,
            warehouse_id,
            customer_id,
            status,
        }, { returning: true });

        for (let i = 0; i < item.length; i++) {
            const orderItem = item[i];

            console.log(orderItem.id);
            const foundItem = await Item.findOne({
                where: { id: orderItem.id }
            })

            if (!foundItem) throw { name: "errorNotFound" }

            await Order_Item.create({
                order_id: order.id,
                item_id: orderItem.id,
                quantity: orderItem.quantity
            }, { transaction: t })
        }

        await t.commit()

        res.status(201).json({ data: order })
    } catch (error) {
        await t.rollback()
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
