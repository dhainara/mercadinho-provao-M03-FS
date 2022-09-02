import productsService from '../services/products.js'

async function findAllProductsControler(req, res) {
  try {
    const allProducts = await productsService.findAllProductsService()
    res.status(200).send(allProducts)
  } catch (err) {
    console.log(err)
    res.status(500).send({message: "Não há produtos registrados!"})
  }
}

async function findProductsByIdControler(req, res) {
  try {
    const id = req.params.id
    const productByID = await productsService.findProductsByIdService(id)
    res.status(200).send(productByID)
  } catch (err) {
    console.log(err)
    res.status(500).send({message: "Não há lista de produtos com esse Id!"})
  }  
}

const createProductsController = async (req, res) => {
 try {
    const products = req.body
    const newProducts = await productsService.createProductsService(products)
    res.status(200).send('Produtos criado com sucesso!', newProducts)
    
  } catch (err) {
    console.log(err)
    res.status(400).send({ message: err.message })
  }
};

async function updateProductsController(req, res) {
  try {
    const id = req.params.id
    const products = req.body
    const updatedProducts = await productsService.updateProductsService(id , products);
    res.status(200).send({message: "Products updated", updatedProducts});
  } catch (err) {
    res.status(500).send({ message: err.message});
  }
}

async function deleteProductsController(req, res) {
  try {
    const id = req.params.id
    const productsToBeDeleted = await productsService.deleteProductsService(id)
    res.send('Products Deleted!')
  } catch (err) {
    res.status(500).send({ message: err.message});
  }
}

const productsController = {
    findProductsByIdControler,
    deleteProductsController,
    updateProductsController,
    createProductsController,
    findAllProductsControler
}

export default productsController