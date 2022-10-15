const nodemailer = require("nodemailer");

export const transporter = nodemailer.createTransport({
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

export const emailVerificationTemplate = (token) => {
    return `<h1>Avishkar 2k22 | Email Verification</h1>
    <p>Click the link below to verify your email address</p>
    <a href="${process.env.FRONTEND_HOST_URL}/reset-password?key=${token}">Verify Email</a>`;
};
