import crypto from "crypto"
import ProductsEntity from "./products.js"

class UserEntity {
    constructor(user, products) {
        this.id = user.id ?? crypto.randomUUID()
        this.email = user.email
        this.password = user.password
        this.products = products.products ?? []
    }

    validateUser() {

        if (!this.email || !this.password) {
            throw new Error("Tente novamnete, lembre-se de infomar email e password")
        }

        if (this.email.lenght <3 || this.email.lenght <3) {
            throw new Error("Muito curto! Use mais que 3 caracteres.")
        }
    }

    getUser() {
        return {
            id: this.id,
            email: this.email,
            products: this.products
        }
    }
}

export default UserEntity