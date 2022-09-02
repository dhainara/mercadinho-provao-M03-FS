import express from 'express'
import productsController from '../controllers/products.js'

const productsRouter = express.Router()

productsRouter.get("/", productsController.findAllProductsControler)
productsRouter.get("/:id", productsController.findProductsByIdControler)
productsRouter.post("/create", productsController.createProductsController)
productsRouter.put("/update/:id", productsController.createProductsController)
productsRouter.delete("/delete/:id", productsController.deleteProductsController)

export default productsRouter