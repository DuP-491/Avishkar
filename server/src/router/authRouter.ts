import express, { Request, Response } from "express";
import { check } from "express-validator";
import { userResetEmail, userResetPassword, userSignin, userSignup } from "../controller/authController";
import { authErrorHandler } from "../middleware/errorHandler";

const router = express.Router();

// middleware for authRouter
router.use((req: Request, res: Response, next) => {
    console.log("Triggering the auth router!!");
    next();
});

router.post(
    "/signup",
    [
        check("name").isLength({ min: 3 }).withMessage("please enter a valid name for printing on certificate!"),
        check("email").isEmail().withMessage("enter a valid email!"),
        check("gender").isIn(["male", "female", "none"]).withMessage("enter a valid gender!"),
    ],
    authErrorHandler,
    userSignup
);

router.post("/signin", userSignin);

router.post("/send-reset-mail", userResetEmail);

router.post(
    "/reset-password",
    [
        check("token").exists().withMessage("invalid token!"),
        check("password").isLength({ min: 8 }).withMessage("ensure password is at least 8 characters!"),
    ],
    authErrorHandler,
    userResetPassword
);

export default router;