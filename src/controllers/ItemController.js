const { Item, Category, Item_Category, sequelize } = require("../models");

// Create new items
const addItem = async (req, res, next) => {
    const t = await sequelize.transaction();
    try {
        const {sku, title, price, type, description, keywords, category_ids} = req.body;
       
        const item = await Item.create({
            sku,
            title,
            price,
            type,
            description,
            keywords
        }, {returning: true, transaction: t})

        for(let i = 0; i < category_ids.length; i++ ) {
            const categoryID = category_ids[i]

            const foundCategory = await Category.findOne({
                where: {
                    id: +categoryID
                }

            })

            if(!foundCategory) {
                throw { name: "errorNotFound" };
            }

            await Item_Category.create({
                item_id: item.id, 
                category_id: foundCategory.id
            }, { transaction: t })

        } 

        await t.commit();

        res.status(201).json({
            message: "Item created Succesfully",
            data: item
        })
    } catch (error) {
        await t.rollback();
        next(error)
    }
}

module.exports = {
    addItem
}