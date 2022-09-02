import { config } from "dotenv"
import express from "express"
import cors from "cors"
import { connectMongoDB } from "./database/mongo/connect.js"
import userRouter from './routers/user.js'
import productsRouter from './routers/products.js'
import authRouter from './auth/routes.js'

console.clear()

config()
connectMongoDB()

const port = process.env.PORT || 3000
const app = express()

app.use(cors())
app.use(express.json())

app.use('/user', userRouter)
app.use('/auth', authRouter)
app.use('/products', productsRouter)

app.get('/', (req, res) => {
    res.send('Iniciado!')
})
 
app.listen(port, () => {
    console.log(`Iniciado! Servidor na porta ${port}`)
})