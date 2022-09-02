import mongoose from 'mongoose'
import bcrypt from 'bcryptjs/dist/bcrypt.js'

export const productSchema = new mongoose.Schema({
    id: { type: String, required: true },
    sacosDeArroz: { type: Number, required: true },
    sacosDeFeijao: { type: Number, required: true },
    oleo: { type: String, required: true },
    banana: { type: Number, required: true },
    frango: { type: Number, required: true }
})

export const userSchema = new mongoose.Schema({
    id: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    products: { type: [productSchema]}
})

userSchema.pre('save', async function (next) {
    this.password = await bcrypt.hash(this.password, 10)
    next()
})

export const User = mongoose.model('User', userSchema)

export const Products = mongoose.model('Products', productSchema)