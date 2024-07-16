import express from 'express'
import { dbConnection } from './database/dbConnection.js'
import bootstrap from './bootstrap.js'
const app = express()
const port = 3000
app.use(express.json())
bootstrap(express,app)
app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`app listening on port ${port}!`))