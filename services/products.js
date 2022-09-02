
import { Products } from '../database/schema/schemas.js'
import ProductsEntity from '../entity/products.js'


async function findAllProductsService() {
    return await Products.find()
}

async function findProductsByIdService(id) {
    return await Products.findOne({id:id})
}

async function createProductsService(body) {
    const newProducts = new ProductsEntity(body)
    const productsCreatedpush = await Products.create(newProducts)

    return productsCreatedpush
}

async function updateProductsService(id, products) {
    const updateProducts = await Products.findOneAndReplace({ id: id }, products, { new: true })
    return updateProducts
}

async function deleteProductsService(id) {
    return await Products.findOneAndDelete({ id: id })
}

const productsService = {
    deleteProductsService,
    findProductsByIdService,
    createProductsService,
    updateProductsService,
    findAllProductsService
}

export default productsService