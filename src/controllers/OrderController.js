const { Op, where } = require("sequelize");
const {
    Order,
    Order_Item,
    Warehouse,
    Item_Warehouse,
    Customer,
    Item,
    sequelize,
} = require("../models");

const createOrder = async (req, res, next) => {
    const t = await sequelize.transaction();
    try {
        const { invoice, warehouse_id, customer_id, status, items } = req.body;

        const order = await Order.create(
            {
                invoice,
                total_price: 0,
                warehouse_id,
                customer_id,
                status,
            },
            { returning: true, transaction: t }
        );

        let totalPrice = 0

        for (let i = 0; i < items.length; i++) {
            const orderItem = items[i];

            console.log(orderItem);
            const foundItem = await Item.findOne({
                where: { id: orderItem.id },
            });

            const foundStock = await Item_Warehouse.findOne({
                where: {
                    item_id: orderItem.id,
                    warehouse_id,
                },
            });

            if (!foundStock) {
                throw { name: "errorNotFound" };
            }

            if (foundStock.quantity < orderItem.quantity) {
                throw { name: "insufficientQuantity" };
            }

            if (foundItem.price !== orderItem.price_item) {
                throw { name: "itemPriceIncorect" };
            }

            const data = await Order_Item.create(
                {
                    order_id: order.id,
                    item_id: foundItem.id,
                    quantity: orderItem.quantity,
                },
                { transaction: t }
            );


            totalPrice += +orderItem.price_item * data.quantity

            await foundStock.decrement("quantity", {
                by: data.quantity,
                transaction: t,
            });
        }

        order.total_price = totalPrice
        await order.save({ transaction: t })
        await t.commit();

        res.status(201).json({
            success: true,
            message: "Order and Order Items Created successfully",
            data: order,
        });
    } catch (error) {
        await t.rollback();
        next(error);
    }
};

const getAllOrder = async (req, res, next) => {
    try {
        const page = +req.query.page || 1;
        const limit = +req.query.limit || 10;
        const { q, status } = req.query;
        const offset = limit * (page - 1);
        let optionFilter = {
            include: [
                {
                    model: Warehouse
                },
                {
                    model: Customer
                },
                {
                    model: Item
                }
            ]
        };


        if (q) {
            optionFilter.where = {
                [Op.or]: [
                    {
                        "$Warehouse.title$": {
                            [Op.iLike]: `%${q}%`
                        }
                    },
                    {
                        "$Customer.name$": {
                            [Op.iLike]: `%${q}%`
                        }
                    },
                    {
                        "$Items.sku$": {
                            [Op.iLike]: `%${q}%`
                        }
                    }
                ]
            }
        }

        if (status) {
            optionFilter.where.status = status
        }

        const { count, rows } = await Order.findAndCountAll({
            ...optionFilter,
            subQuery: false,
            offset,
            limit,
        });

        const totalPage = Math.ceil(count / limit);
        const nextPage = page < totalPage ? page + 1 : null;
        const prevPage = page > 1 ? page - 1 : null;


        res.status(200).json({
            success: true,
            totalData: count,
            totalPage,
            prevPage,
            nextPage,
            currentPage: page,
            data: rows,
        });
    } catch (error) {
        next(error);
    }
};

const getOrderById = async (req, res, next) => {
    try {
        const { id } = req.params;

        const foundOrder = await Order.findOne({
            include: [{
                model: Item
            }, {
                model: Customer
            }, {
                model: Warehouse
            }],
            where: { id }
        });

        if (!foundOrder) {
            throw { name: "errorNotFound" };
        }

        res.status(200).json({ status: true, data: foundOrder })
    } catch (error) {
        next(error);
    }
};

const updateOrder = async (req, res, next) => {
    try {

        const { id } = req.params;
        const { status } = req.body

        const foundOrder = await Order.findOne({ where: { id } })
        if (!foundOrder) {
            throw { name: "errorNotFound" }
        }

        const data = await foundOrder.update({ status })

        res.status(200).json({
            status: true,
            message: "Order Successfully Updated",
            data
        })
    } catch (error) {
        next(error);
    }
};

const deleteOrder = async (req, res, next) => {
    try {
        const { id } = req.params

        const foundOrder = await Order.findOne({ where: { id } })
        if (!foundOrder) {
            throw { name: "errorNotFound" };
        }

        await foundOrder.destroy()

        res.status(200).json({ status: true, message: "Order Deleted Successfully" })
    } catch (error) {
        next(error);
    }
};

module.exports = {
    createOrder,
    getAllOrder,
    getOrderById,
    updateOrder,
    deleteOrder,
};