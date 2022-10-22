import * as nodemailer from "nodemailer";

export async function sendUserVerificationMail(email, token) {
    const mailSubject = "User Email Verification";
    const mailMessage = `<h1> <a href="${process.env.FRONTEND_HOST_URL}/${token}">Click Here</a> To Verify </h1>`;
    await mailSender(email, mailSubject, mailMessage);
}

async function mailSender(email, subject, message) {
    try {
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                type: "OAuth2",
                user: process.env.MAIL_USERNAME,
                pass: process.env.MAIL_PASSWORD,
                clientId: process.env.OAUTH_CLIENTID,
                clientSecret: process.env.OAUTH_CLIENT_SECRET,
                refreshToken: process.env.OAUTH_REFRESH_TOKEN,
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
