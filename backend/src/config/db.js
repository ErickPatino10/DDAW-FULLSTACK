import mongoose from 'mongoose'

const conectarDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI)
        console.log('Base de datos conectada')
    } catch (error) {
        console.log('Error al conectar la base de datos:', error.message)
        process.exit(1)
    }
}

export default conectarDB
