const nodemailer = require("nodemailer");

export async function sendUserVerificationMail(email, token) {
    const mailSubject = "User Email Verification";
    const mailMessage = `Click To Verify : ${process.env.FRONTEND_HOST_URL}/reset/${token}`;
    await mailSender(email, mailSubject, mailMessage);
}

async function mailSender(email, subject, message) {
    try {
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.MAIL_USERNAME,
                pass: process.env.APP_PASSWORD,
            },
        });

        await transporter.sendMail({
            from: process.env.MAIL_USERNAME,
            to: email,
            subject,
            text: message,
        });
    } catch (error) {
        console.log("error occured in the mailSender() function!");
        console.log(error);
    }
}
