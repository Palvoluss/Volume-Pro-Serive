const express = require('express')
const { sendEmail } = require('./src/controller/emailControllers')
const { sendMail } = require('./src/controller/nodemailerController')
const app = express() 
const port = 3000
const router = express.Router()
const  mailOptions = {
        from: 'Paolo Prova <paulmic20@gmail.com>',
        to: 'pablomctt@gmail.com',
        subject: "hello from nodemailer",
        text: 'hello',
        html: '<h1>hello</h1'
    }

    sendMail(mailOptions)

    
app.use(express.static('public'))

const emailRouter = require('./src/routes/emailRoutes')

app.use('/email', emailRouter)


app.get('/', (req, res) => {
    res.sendFile('index.html')
})

app.get('*', (req, res) => {
    res.sendFile(__dirname + '/public/404.html')
})

app.listen(port, () => {
    console.log(`Express listen at http://localhost:${port}`)
})