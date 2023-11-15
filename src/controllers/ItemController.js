const errorHandler = require("../middlewares/ErrorHandlerMiddlware");
const { Item, Category, Item_Category, Item_Warehouse, Warehouse, sequelize, DataType } = require("../models");
const { Op } = require("sequelize");


// Create new items
const addItem = async (req, res, next) => {
    const t = await sequelize.transaction();
    try {
        const { sku, title, price, type, description, keywords, category_ids } = req.body;

        const item = await Item.create({
            sku,
            title,
            price,
            type,
            description,
            keywords
        }, { returning: true, transaction: t })

        for (let i = 0; i < category_ids.length; i++) {
            const categoryID = category_ids[i]

            const foundCategory = await Category.findOne({
                where: {
                    id: +categoryID
                }

            })

            if (!foundCategory) {
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

// List All Items
const getItems = async (req, res, next) => {
    try {
        // Pagination :
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 10;
        const q = req.query.q || "";
        let category_ids = req.query.category_ids
        let optionFilter = {
            where: {
                [Op.or]: []
            }
        };

        const offset = (page - 1) * limit;

        if (q) {

            let filterTitle = {
                title: {
                    [Op.iLike]: `%${q}%`
                }
            }

            let filterKeywords = {
                keywords: {
                    [Op.iLike]: `%${q}%`
                }
            }

            let filterSKU = {
                sku: {
                    [Op.iLike]: `%${q}%`
                }
            }

            optionFilter.where[Op.or].push(filterTitle, filterKeywords, filterSKU)
        }



        if (category_ids) {
            category_ids = category_ids.map((cat_id) => +cat_id)

            optionFilter.where[Op.or].push({
                '$Categories.id$': {
                    [Op.in]: category_ids
                }
            })
        }


        const { count, rows: items } = await Item.findAndCountAll({
            include: [{
                model: Category
            }],
            ...optionFilter,
            subQuery: false,
            offset,
            limit,
        });

        const totalPages = Math.ceil(count / limit);

        const nextPage = page < totalPages ? page + 1 : null;
        const prevPage = page > 1 ? page - 1 : null;

        const paginationInfo = {
            totalItems: count,
            totalPages,
            currentPage: page,
            nextPage,
            prevPage,
            items: items,
        };

        res.status(200).json({ data: paginationInfo })
    } catch (error) {
        next(error)
    }
}

// Get Item & CategoryID by id.
const getItemID = async (req, res, next) => {
    try {
        const { id } = req.params;

        const foundItem = await Item.findOne({
            include: [{
                model: Category
            }],
            where: {
                id
            }
        })

        const foundWarehouse = await Item.findOne({
            include: [{
                model: Warehouse
            }],
            where: {
                id
            }
        })

        if (!foundWarehouse) {
            throw { name: "errorNotFound" }
        }

        if (!foundItem) {
            throw { name: "errorNotFound" }
        }

        await res.status(200).json({ status: true, data_item: foundItem, data_warehouse: foundWarehouse })
    } catch (error) {
        next(error)
    }
}

// Update Item
const updateItem = async (req, res, next) => {
    const t = await sequelize.transaction();
    try {
        const { id } = req.params;
        const { sku, title, price, description, keywords, category_ids } = req.body;

        const foundItem = await Item.findOne({
            where: {
                id
            }
        })

        if (!foundItem) {
            throw { name: "errorNotFound" }
        }

        let updateItem = ({
            sku: sku || foundItem.sku,
            title: title || foundItem.title,
            price: price || foundItem.price,
            description: description || foundItem.description,
            keywords: keywords || foundItem.keywords
        }, { returning: true, transaction: t })

        for (let i = 0; i < category_ids.length; i++) {
            const categoryID = category_ids[i]

            const foundCategory = await Category.findOne({
                where: {
                    id: +categoryID
                }
            })

            if (!foundCategory) {
                throw { name: "errorNotFound" };
            }

            await Item_Category.create({
                item_id: foundItem.id,
                category_id: foundCategory.id
            }, { transaction: t })
        }

        await t.commit();
        await foundItem.update(updateItem);
        res.status(200).json({ status: true, message: "Item Updated Succesfully" });
    } catch (error) {
        next(error)
    }
}
// Upload Image 
const uploadImage = async (req, res, next) => {
    try {
        const params = {
            file: req.file,
            id: req.params.id
        }

        const { file, id } = params;

        if (!file) {
            throw { name: "FileNotExists" }
        }

        const image_url = `${process.env.UPLOADPATH}${file.filename}`;

        const payload = {
            image_url
        }

        const foundItem = await Item.findOne({
            where: {
                id
            }
        })

        if (!foundItem) {
            throw { name: "errorNotFound" }
        }

        await foundItem.update(payload)

        res.status(200).json({ status: true, message: "Upload Image Succesfully", data: foundItem });




    } catch (error) {
        next(error)
    }
}

// Delete Item
const deleteItem = async (req, res, next) => {
    try {
        const { id } = req.params

        const foundItem = await Item.findOne({
            where: {
                id
            }
        })

        if (!foundItem) {
            throw { name: "errorNotFound" }
        }

        await foundItem.destroy();
        res.status(200).json({ status: true, message: "Item Deleted Succesfully" });
    } catch (error) {
        next(error)
    }
}

module.exports = {
    addItem,
    getItems,
    getItemID,
    updateItem,
    uploadImage,
    deleteItem
}