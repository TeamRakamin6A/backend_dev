const { Op, where } = require("sequelize")
const { Item, Supplier, Warehouse, Item_Warehouse, Supply_Order, Supply_Item, sequelize} = require("../models")


// Create Supply Order
const createSupplyOrder = async (req, res, next) => {
    const t = await sequelize.transaction();

    try {
        const { id, invoice, total_price, supplier_id, warehouse_id, status, items} = req.body;

        const supplyOrder = await Supply_Order.create({
            id,
            invoice,
            total_price,
            supplier_id,
            warehouse_id,
            status
        },  { returning: true, transaction: t })

        for (let i = 0; i < items.length; i++) {
            const supplyItem = items[i]

            console.log(supplyItem);
            
            const foundItem = await Item.findOne({
                where: { id: supplyItem.id}
            })

            const getStock = await Item_Warehouse.findOne ({
                where: {
                    item_id: supplyItem.id,
                    warehouse_id
                },
            })

            if (!getStock) {
                throw { name: "errorNotFound" };
            }

            if (getStock.quantity < supplyItem.quantity) {
                throw { name: "insufficientQuantity" };
            }

            if (foundItem.price !== supplyItem.price_item) {
                throw { name: "itemPriceIncorect" };
            }

            const processData = ({
                supply_order_id: supplyOrder.id,
                item_id: foundItem.id,
                price: supplyOrder.total_price,
                quantity: supplyItem.quantity
            })

            await Supply_Item.create({
                supply_order_id: processData.supply_order_id,
                item_id: foundItem.id,
                price: processData.price,
                quantity: processData.quantity
            })
            
            await supplyOrder.increment("total_price", {
                by: +supplyItem.price_item * processData.quantity,
                transaction: t,
            });
            
            await getStock.increment("quantity", {
                by: processData.quantity,
                transaction: t,
            });

            await t.commit();

            res.status(201).json({
                success: true,
                message: "Supply Order and Supply Items Created successfully",
                data: supplyOrder,
            });
        }

    } catch (error) {
        next (error)
    }
}

module.exports = {
    createSupplyOrder
}