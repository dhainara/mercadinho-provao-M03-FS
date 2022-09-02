import crypto from "crypto"
import UserEntity from "./user.js"

class ProductsEntity {
    constructor(products) {
        this.id = products.id ?? crypto.randomUUID()
        this.sacosDeArroz = products.sacosDeArroz
        this.sacosDeFeijao = products.sacosDeFeijao
        this.oleo = products.oleo
        this.banana = products.banana
        this.frango = products.frango
    }

    getUProducts() {
        return {
            id: this.id,
            sacosDeArroz: this.sacosDeArroz,
            sacosDeFeijao: this.sacosDeFeijao,
            oleo: this.oleo,
            banana: this.banana,
            frango: this.frango,
        }
    }
}

export default ProductsEntity