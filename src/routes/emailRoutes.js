const express = require('express')
const router = express.Router()

const emailControllers = require('../controller/emailControllers')

// TODO: remove in prod
router.get('/', emailControllers.getEmailRoute)

// send email
router.post('/', emailControllers.sendEmail)

module.exports = router
