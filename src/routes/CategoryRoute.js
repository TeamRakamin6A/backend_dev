const express = require ('express')
const CategoryRouter = express.Router()
const CategoryController = require ("../controllers/CategoryController")

CategoryRouter.post('/', CategoryController.addCategory)
CategoryRouter.get('/:id', CategoryController.getCategorybyId)
CategoryRouter.get('/', CategoryController.getAllCategory) 
CategoryRouter.put('/:id', CategoryController.updateCategory)
CategoryRouter.delete('/:id', CategoryController.deleteCategory)

module.exports = CategoryRouter