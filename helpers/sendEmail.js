const nodemailer = require('nodemailer');
require('dotenv').config();

let transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  secure: false,

  auth: {
    user: 'fadgadahababashirdev@gmail.com',
    pass: process.env.app_password,
  },
});

let sendEmail = (from, to, subject, html) => {
  transporter.sendMail(
    {
      from,
      to,
      subject,
      html,
    },
    (error, info) => {
      if (error) {
        console.log(error);
      } else {
        console.log('Email was sent successfully!');
      }
    }
  );
};

module.exports = sendEmail;
