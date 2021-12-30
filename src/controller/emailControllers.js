const nodemailer = require("nodemailer");
const { sendMail } = require("./nodemailerController");

const getEmailRoute = (req, res) => {
  const params = new Object(req.query);

  const maillist = [
    params.email,
    "shadow_lugia@hotmail.it",
    "pablomctt@gmail.com",
  ];
  const mailOptions = {
    from: "Paolo Prova <paulmic20@gmail.com>",
    bcc: "shadow_lugia@hotmail.it",
    subject: `Email a Volume ProService da parte div ${params.firstname}`,
    html: `<p>
    Ecco il testo che hai inviato: <br/><br/>
    ${params.subjct} <br/><br/>
    Riceverai una risposta nel iù breve tempo possibile!
    Ti ringraziamo per averci contattato </p>`,
  };

  try {
    sendMail(mailOptions);
    res.send(
      "LA tua mail è stata inviata, controlla che ti sia stata recapitata una copia. PRima di inviarne un'altra contrlla nella casella di spam"
    );
  } catch (error) {
    console.log(error);
  }
};

const sendEmail = (req, res, next) => {
  const body = req.body;
};

module.exports = {
  getEmailRoute,
  sendEmail,
};
