import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import { sendUserVerificationMail } from "../middleware/mailHandler";
import {
    generateHash,
    generateSignedPayload,
    generateSalt,
    generateUsername,
    generateVerifyToken,
} from "../helper/authHelper";

const prisma = new PrismaClient();

const userSignup = async (req: Request, res: Response, next) => {
    const { name, email, collegeName, gender, mobile } = req.body;
    const username: string = generateUsername(email);

    // generating salt for password hash and token for user email verification
    const salt = generateSalt(8);
    const token = generateVerifyToken(48);

    try {
        const emailUser = await prisma.user.findFirst({ where: { email } });
        const mobileUser = await prisma.user.findFirst({ where: { mobile } });
        if (emailUser || mobileUser) {
            res.statusCode = 400;
            res.json({ error: "bad request", message: "email / mobile already in use!", success: false });
        } else {
            const isFeePaid = true;
            // if (email.endsWith("@mnnit.ac.in")) isFeePaid = true;
            await prisma.user.create({
                data: { name, email, collegeName, gender, mobile, isFeePaid, username, salt, token },
            });
            // send verification email to the client
            await sendUserVerificationMail(email, token);

            res.statusCode = 200;
            res.json({ message: "user registration successful!", success: true });
        }
    } catch (error) {
        console.log("error occured in the userSignup() controller!");
        next(error);
    }
};

const userSignin = async (req: Request, res: Response, next) => {
    const { email, username } = req.body;
    let { password } = req.body;
    try {
        const user = await prisma.user.findFirst({
            where: {
                OR: [{ username }, { email }],
            },
        });

        // case when the user with the credentials is not found
        if (user === null || user === undefined) {
            res.statusCode = 404;
            return res.json({
                error: "user not found",
                message: "email or username and password don't match!",
                success: false,
            });
        }

        // case when the passwords don't match
        password = generateHash(user.salt, password);
        if (user.password === null || user.password !== password) {
            res.statusCode = 401;
            return res.json({
                error: "authentication error",
                message:
                    user.password === null
                        ? "please verify yourself and try again!"
                        : "email/username and password don't match!",
                success: false,
            });
        }

        // generating JWT token with RSA 512 encryption
        const token = generateSignedPayload(user);
        res.statusCode = 200;
        res.json({ message: "user login successful!", token, success: true });
    } catch (error) {
        console.log("error occured in the userSignin() controller!");
        next(error);
    }
};

const userResetEmail = async (req: Request, res: Response, next) => {
    const { email } = req.body;

    try {
        let user = await prisma.user.findFirst({
            where: { email }
        });

        // check if the user with the email address exists or not
        if (user === null) {
            res.statusCode = 400;
            return res.json({
                error: "user not found",
                message: "email is not registered!",
                success: false
            });
        }

        // regenerate the token field send via email to the user
        const token = generateVerifyToken(48);
        user = await prisma.user.update({
            where: { email },
            data: { token }
        });
        // send verification email to the client
        await sendUserVerificationMail(email, token);

        res.statusCode = 200;
        res.json({ message: "reset email sent successfully!", success: true });
    }
    catch (error) {
        console.log("error occured in the userResetEmail() controller!");
        next(error);
    }
};

const userResetPassword = async (req: Request, res: Response, next) => {
    const { token } = req.body;
    let { password } = req.body;

    try {
        const user = await prisma.user.findFirst({
            where: {
                token,
            },
        });

        // case when the user with the supplied token doesn't exist
        if (user === null || user === undefined) {
            res.statusCode = 404;
            return res.json({
                error: "user not found",
                message: "invalid token!",
                success: false,
            });
        }

        password = generateHash(user.salt, password);
        // updating the password and restoring the value of token to null
        await prisma.user.update({
            where: { id: user.id },
            data: { password, token: null },
        });

        res.statusCode = 200;
        res.json({ message: "password reset successful!", success: true });
    } catch (error) {
        console.log("error occured in the userResetPassword() controller!");
        next(error);
    }
};

export { userSignup, userSignin, userResetEmail, userResetPassword };
