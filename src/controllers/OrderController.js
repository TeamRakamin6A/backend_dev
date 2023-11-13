const { Op, where } = require("sequelize");
const { Order, Order_Item, Warehouse, Item_Warehouse, Customer, Item, sequelize } = require("../models");

const createOrder = async (req, res, next) => {
    const t = await sequelize.transaction();
    try {
        const { invoice, warehouse_id, customer_id, status, items } =
            req.body;

        const order = await Order.create(
            {
                invoice,
                total_price: 0,
                warehouse_id,
                customer_id,
                status,
            },
            { returning: true }
        );

        for (let i = 0; i < items.length; i++) {
            const orderItem = items[i];

            console.log(orderItem);
            const foundItem = await Item.findOne({
                where: { id: orderItem.id },
            });

            const foundStock = await Item_Warehouse.findOne({
                where: {
                    item_id: orderItem.id,
                    warehouse_id
                }
            })

            if (!foundStock) {
                throw { name: "errorNotFound" }
            }

            if (foundStock.quantity < orderItem.quantity) {
                await t.rollback()
                throw { name: "insufficientquantity" }
            }


            const data = await Order_Item.create(
                {
                    order_id: order.id,
                    item_id: foundItem.id,
                    quantity: orderItem.quantity,
                },
                { transaction: t }
            );
            console.log('Order Item Price:', orderItem.price_item);
            console.log('Data Quantity:', data.quantity);

            await order.update({
                total_price: +orderItem.price_item * data.quantity
            }, { transaction: t })
        }

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
        const { q, customer, sku, warehouse } = req.query;
        const offset = limit * (page - 1);
        let optionFilter = {};

        if (customer) {
            optionFilter.include = {
                model: Customer,
                where: {
                    name: { [Op.iLike]: `%${customer}%` },
                },
            };
        }

        if (sku) {
            optionFilter.include = {
                model: Order_Item,
                include: {
                    model: Item,
                    where: {
                        sku: { [Op.iLike]: `%${sku}%` },
                    },
                },
            };
        }

        if (warehouse) {
            optionFilter.include = {
                model: Warehouse,
                where: {
                    title: { [Op.iLike]: `%${warehouse}%` },
                },
            };
        }

        console.log(req.query, "<<<<<<<<<<<<<<<<<");
        console.log(optionFilter, "<<<<<<<<<<<<<<<<<");
        const { count, rows } = await Order.findAndCountAll({
            ...optionFilter,
            where: {
                status: { [Op.iLike]: `%${q || ""}%` },
            },
            offset,
            limit,
        });

        const totalPage = Math.ceil(count / limit)
        const nextPage = page < totalPage ? page + 1 : null
        const prevPage = page > 1 ? page - 1 : null

        if (rows.length === 0) throw { name: "errorNotFound" };

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

const getOrderById = (req, res, next) => {
    try {
    } catch (error) {
        next(error);
    }
};

const updateOrder = (req, res, next) => {
    try {
    } catch (error) {
        next(error);
    }
};

const deleteOrder = (req, res, next) => {
    try {
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
