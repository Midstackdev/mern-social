import express from 'express'

import dotenv from 'dotenv'
import morgan from 'morgan'
import helmet from 'helmet'
import path from 'path'

import { registerRoutes } from './routes/index.js'
import { fileUpload } from './config/upload.js'
import { connectToDB } from './config/db.js'

import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config()
const app = express()

const PORT = process.env.PORT  

connectToDB()

app.use('/images', express.static(path.join(__dirname, "public/images")))


app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(helmet())
app.use(morgan('common'))

fileUpload(app)
registerRoutes(app)


app.get('/', (req, res) => {
    res.send('Welcome to homepage')
})

app.listen(PORT, () => {
    console.log('server running')
})