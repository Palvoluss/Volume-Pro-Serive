const express = require('express')
const app = express() 
const port = 3000
const router = express.Router()

app.use(express.static('public'))

const emailRouter = require('./src/routes/emailRoutes')

app.use('/email', emailRouter)

app.get('/', (req, res) => {
    res.sendFile('index.html')
})

app.listen(port, () => {
    console.log(`Express listen at http://localhost:${port}`)
})