import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import conectarDB from './config/db.js'

dotenv.config()

const app = express()
const PORT = process.env.PORT || 3000

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
    res.send('API funcionando')
})

conectarDB()

app.listen(PORT, () => {
    console.log(`Servidor en http://localhost:${PORT}`)
})
