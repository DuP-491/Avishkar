import express, { Request, Response } from "express";
import { check } from "express-validator";
import { userResetPassword, userSignin, userSignup } from "../controller/authController";
import { authErrorHandler } from "../middleware/errorHandler";

const router = express.Router();

// middleware for authRouter
router.use((req: Request, res: Response, next) => {
    console.log("Triggering the auth router!!");
    next();
});

/*
for getting the country codes use the following APIs
ENDPOINT :- https://cuik-projects.github.io/country-list/countries.json
REQUEST :- GET
*/

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

router.post(
    "/reset-password",
    [
        check("token").exists().withMessage("invalid token!"),
        check("password").isLength({ min: 8 }).withMessage("ensure password is at least 8 characters!"),
    ],
    authErrorHandler,
    userResetPassword
);

// forget-password route - generates token and sends it through mail to the client

export default router;
