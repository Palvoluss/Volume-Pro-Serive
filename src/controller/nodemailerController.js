const nodemailer = require('nodemailer')
const { google } = require('googleapis')

const oAuth2Client = new google.auth.OAuth2(CLIENT_ID, CLIENT_SECRET, REDIRECT_URI)
oAuth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });

async function sendMail(mailOptions) {
    try {
        const accessToken = await oAuth2Client.getAccessToken()

        const transoport = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                type: 'OAuth2',
                user: 'paulmic20@gmail.com',
                clientId: CLIENT_ID,
                clientSecret: CLIENT_SECRET,
                refreshToken: REFRESH_TOKEN,
                accessToken: accessToken
            }
        })

        // const  mailOptions = {
        //     from: 'Paolo Prova <paulmic20@gmail.com>',
        //     to: '',
        //     subject: "hello from nodemailer",
        //     text: 'hello',
        //     html: '<h1>hello</h1'
        // }

        const result = await transoport.sendMail(mailOptions)
        return result

    }  catch (error) {
        return error;
    }
}

// sendMail().then((result) => console.log('email sent..', result)).catch((error) => console.log(error.message))
module.exports = {
    sendMail
}
