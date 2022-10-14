import { Prisma } from "@prisma/client";
import { Request, Response } from "express";
import { Result, validationResult } from "express-validator";

/* handling the '404 URL Not Found' situation */
export function urlNotFoundHandler(req: Request, res: Response) {
    res.statusCode = 404;
    const { method, url } = req;
    res.json({
        error: "URL Not Found",
        message: `${method} on ${url} not found!!`,
        success: false,
    });
}

/* handling the '500 Internal Server Error' situation */
export function internalErrorHandler(err: Error, req: Request, res: Response, next) {
    console.log(`⚠[server-err]: ${err.name}`);
    console.error(err.message);

    res.statusCode = 500;
    res.json({
        error: err.name,
        message: err.message,
        success: false,
    });
    next();
}

/* handling the prisma errors */
export function prismaErrorHandler(err: Prisma.PrismaClientKnownRequestError, req: Request, res: Response, next) {
    console.log(`⚠[server-err]: Prisma Error ${err.code}`);
    console.log(err);

    res.statusCode = 409;
    res.json({
        error: `error ${err.code}`,
        message: "there already exists a user with these details!",
        success: false,
    });
    next();
}

export function authErrorHandler(req: Request, res: Response, next) {
    const result: Result = validationResult(req);
    const errors = result.array();

    if (!result.isEmpty()) {
        res.statusCode = 400;
        res.json({
            error: `error field: ${errors[0].param}`,
            message: errors[0].msg,
            success: false,
        });
    } else next();
}
