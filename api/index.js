import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import morgan from 'morgan'
import helmet from 'helmet'


dotenv.config()
const app = express()

const CONNECTION_URL = process.env.CONNECTION_URL
const PORT = process.env.PORT  

mongoose.connect(CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, () => {
    console.log('mongo connected')
})

app.use(express.json())
app.use(helmet())
app.use(morgan('common'))

app.get('/', (req, res) => {
    res.send('Welcome to homepage')
})

app.listen(PORT, () => {
    console.log('server running')
})