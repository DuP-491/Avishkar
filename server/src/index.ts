import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import path from "path";

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.use(morgan("📋[server-log]: :method :url :status :res[content-length] - :response-time ms"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use("/public", express.static(path.join(__dirname, "../public")));

app.get("/", (req: Request, res: Response) => {
    res.send("<h2>Welcome to Avishkar 2022 Portal Server!!</h2>");
});

/* TODO: Router Imports */

/* TODO: Router Use */

// Catching '404 URL Not Found' Errors
app.use(function (req: Request, res: Response) {
    res.status(404);
    return res.json({
        error: `${req.method} on ${req.url} not found!!`,
        success: false,
    });
});

// Catching '500 Internal Server Error' Errors
app.use(function (err: Error, req: Request, res: Response) {
    res.status(500);
    res.json({
        error: err.name,
        message: err.message,
        success: false,
    });
});

app.listen(port, () => {
    console.log(`⚡[server-msg]: Server is running at http://localhost:${port}`);
});
