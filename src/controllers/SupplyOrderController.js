const { Op, where } = require("sequelize");
const { Item, Supplier, Warehouse, Item_Warehouse, Supply_Order, Supply_Item, sequelize } = require("../models")


// Create Supply Order
const createSupplyOrder = async (req, res, next) => {
    const t = await sequelize.transaction();

    try {
        const { invoice, total_price, supplier_id, warehouse_id, status, items } = req.body;

        const supplyOrder = await Supply_Order.create({
            invoice,
            total_price,
            supplier_id, 
            warehouse_id,
            status
        }, { returning: true, transaction: t })

        let totalPrice = 0;

        for (let i = 0; i < items.length; i++) {
            const supplyItem = items[i]

            console.log(supplyItem);

            const foundItem = await Item.findOne({
                where: { id: supplyItem.id }
            })

            const getStock = await Item_Warehouse.findOne({
                where: {
                    item_id: supplyItem.id,
                    warehouse_id
                },
            })
            
            let data = await Supply_Item.create({
                item_id: foundItem.id,
                supply_order_id: Supply_Order.id,
                quantity: supplyItem.quantity,
                price: foundItem.price
            })
            if (!getStock) {
                throw { name: "errorNotFound" };
            }

            if (foundItem.price !== supplyItem.price_item) {
                throw { name: "itemPriceIncorect" };
            }

            await supplyOrder.increment("total_price", {
                by: +supplyItem.price_item * data.quantity,
                transaction: t,
            });

            totalPrice += +supplyItem.price_item * data.quantity


            await getStock.increment("quantity", {
                by: data.quantity,
                transaction: t,
            });


            supplyOrder.total_price = totalPrice

            
            await supplyOrder.save ({ transaction: t })
            await t.commit();


            res.status(201).json({
                success: true,
                message: "Supply Order and Supply Items Created successfully",
                data: supplyOrder,
            });
        }

    } catch (error) {
        await t.rollback();
        next(error)
    }
}


const getSupplyOrder = async (req, res, next) => {
    try {
        const page = +req.query.page || 1;
        const limit = +req.query.limit || 10;
        const queryFilter = req.query.q || "";
        const offset = limit * (page - 1);

        let optionFilter = {
            include: [
                {
                    model: Warehouse
                },
                {
                    model: Supplier
                },
                {
                    model: Item
                }
            ]
        };

        if(queryFilter) {
            optionFilter.where = {
                [Op.or]: [
                    {
                        "$Warehouse.title$": {
                            [Op.iLike]: `%${queryFilter}%`
                        }  
                    },
                    {
                        "$Supplier.company_name$": {
                            [Op.iLike]: `%${queryFilter}%`
                        }
                    },
                    {
                        "$Items.title$": {
                            [Op.iLike]: `%${queryFilter}%`
                        }
                    }
                ]
            }
        }

        const { count, rows } = await Supply_Order.findAndCountAll({
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
        next(error)
    }
}

const getSupplyOrderDetail = async (req, res, next) => {
    try {
        const { id } = req.params;

        const foundOrder = await Supply_Order.findOne({
            include: [{
                model: Item
            }, {
                model: Supplier
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

const updateSupplyOrder = async (req, res, next) => {
    try {

        const { id } = req.params;
        const { status } = req.body

        const foundOrder = await Supply_Order.findOne({ where: { id } })
        if (!foundOrder) {
            throw { name: "errorNotFound" }
        }

        const data = await foundOrder.update({ status })

        res.status(200).json({
            status: true,
            message: "Supply Order Successfully Updated",
            data
        })
    } catch (error) {
        next(error);
    }
};

const deleteSupplyOrder = async (req, res, next) => {
    try {
        const { id } = req.params

        const foundOrder = await Supply_Order.findOne({ where: { id } })
        if (!foundOrder) {
            throw { name: "errorNotFound" };
        }

        await foundOrder.destroy()

        res.status(200).json({ status: true, message: "Supply Order Deleted Successfully" })
    } catch (error) {
        next(error);
    }
};


module.exports = {
    createSupplyOrder,
    getSupplyOrder,
    getSupplyOrderDetail,
    updateSupplyOrder,
    deleteSupplyOrder
}