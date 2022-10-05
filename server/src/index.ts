/* library imports */
import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import cors from "cors";

/* module imports */
import { urlNotFoundHandler, internalErrorHandler, prismaErrorHandler } from "./middleware/errorHandler";

/* express router imports */
import adminRouter from "./router/adminRouter";
import authRouter from "./router/authRouter";
import userRouter from "./router/userRouter";
import mainRouter from "./router/mainRouter";

dotenv.config();

const app: Express = express();
const port = process.env.PORT;
const corsOptions = {
    origin: "*",
    methods: "GET,POST,PUT,DELETE",
    optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));
app.use(morgan("📋[server-log]: :method :url :status | :res[content-length] B | :response-time ms"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get("/", (req: Request, res: Response) => {
    res.send("<h2>Welcome to Avishkar 2022 Portal Server!!</h2>");
});

/* express router use */
app.use("/api/admin", adminRouter);
app.use("/api/auth", authRouter);
app.use("/api/user", userRouter);
app.use("/api", mainRouter);

/* error handling middlewares */
app.use(urlNotFoundHandler);
app.use(prismaErrorHandler);
app.use(internalErrorHandler);

app.listen(port, () => {
    console.log(`⚡[server-msg]: Server is running at http://localhost:${port}`);
});
