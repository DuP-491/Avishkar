// const nodemailer = require("nodemailer");

// export async function sendUserVerificationMail(email, token) {
//     const mailSubject = "User Email Verification";
//     const mailMessage = `Click To Verify : ${process.env.FRONTEND_HOST_URL}/reset/${token}`;
//     await mailSender(email, mailSubject, mailMessage);
// }

// async function mailSender(email, subject, message) {
//     try {
//         const transporter = nodemailer.createTransport({
//             service: "gmail",
//             auth: {
//                 user: process.env.MAIL_USERNAME,
//                 pass: process.env.APP_PASSWORD,
//             },
//         });

//         await transporter.sendMail({
//             from: process.env.MAIL_USERNAME,
//             to: email,
//             subject,
//             text: message,
//         });
//     } catch (error) {
//         console.log("error occured in the mailSender() function!");
//         console.log(error);
//     }
// }

const formData = require('form-data');
const Mailgun = require('mailgun.js');

export async function sendUserVerificationMail(email, token) {
    const mailSubject = "User Email Verification 👩‍💻";
    const mailMessage = `<html>Click To Verify : <a href='${process.env.FRONTEND_HOST_URL}/reset/${token}'>link</a></html>
    <br>
    <p> if that does not work, copy and paste the following url in the browser</p>
    <p>${process.env.FRONTEND_HOST_URL}/reset/${token}</p>
    `;
     const mailSent = await mailSender(email, mailSubject, mailMessage);
     return mailSent
  }

async function mailSender(email, subject, message) {

const mailgun = new Mailgun(formData);
const client = mailgun.client({username: 'api', key: process.env.MG_API_KEY});
  const messageData = {
    from: 'Avishkar 2k22<avishkar@mg.divyansh.rocks>',
    to: email,
    subject: subject,
    text: message,
    html:message
  };

  try {
    const res = await client.messages.create(process.env.MG_DOMAIN_NAME, messageData)
    console.log(`mail sent ${email}`)
    return true;
  } catch (error) {
      console.log("error occured in the mailSender() function!",error);
      return false;
  }
}

 