const { Item } = require("../models");


const addItem = async (req, res, next) => {
    try {
        const {sku, title, price, type, description, keywords} = req.body;
       
        const item = await Item.create({
            sku,
            title,
            price,
            type,
            description,
            keywords
        }, {returning: true})

        res.status(201).json({
            message: "Item created Succesfully",
            data: item
        })
    } catch (error) {
        next(error)
    }
}

module.exports = {
    addItem
}