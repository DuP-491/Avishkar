import express, { Request, Response } from "express";

const router = express.Router();

// middleware for mainRouter
router.use((req: Request, res: Response, next) => {
    console.log("Triggering the main router!!");
    next();
});

router.get("/", (req: Request, res: Response) => {
    res.send("About Main!!");
});

export default router;
