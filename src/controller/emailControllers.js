const nodemailer = require('nodemailer')

const getEmailRoute = (req, res) => {
    res.send('You get your email route')
    console.log('email get')
}

const sendEmail = (req, res, next) => {
  console.log('body:', req.body)

}

module.exports = {
    getEmailRoute,
    sendEmail
}
