import mongoose from 'mongoose'
export const connectMongoDB = () => {
    console.log('Conectando ao banco de dados...')

    mongoose.connect(process.env.DATABASE_URL || 'mongodb://admin@localhost:27017/', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
        .then(() => console.log('Mongo conectado!'))
        .catch((e) => console.log('Erro ao conectar com o banco de dados: ', e))
}