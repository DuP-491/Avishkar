import { Request, Response } from "express";
import { readFileSync } from "fs";
import { join } from "path";
import { verify } from "jsonwebtoken";
import { PrismaClient, Role } from "@prisma/client";

const prisma = new PrismaClient();

const publicKEY = readFileSync(join(__dirname, "../public.key"), "utf-8");
const verifyOptions = {
    issuer: "Avishkar 2k22",
    expiresIn: "24h",
    algorithm: ["RS256"],
};

const rolePriority = {
    "ADMIN": 0,
    "COORDIE": 1,
    "USER": 2
};

export async function checkUserAuthorization(req: Request, res: Response, next) {
    try {
        const authToken = req.headers.authorization?.substring(req.headers.authorization.indexOf(" ") + 1);
        const payload = verify(authToken, publicKEY, verifyOptions);
        const user = await prisma.user.findFirst({
            where: { id: payload.id },
        });
        if (user === null) throw new Error("user doesn't exist!");

        req.app.locals = user;
        next();
    } catch (err) {
        res.statusCode = 401;
        res.json({
            error: "unauthorised user",
            message: "authorization token is invalid or expired! please re-login!",
            success: false,
        });
    }
}

export function checkCoordieAuthrorization(req: Request, res: Response, next) {
    if (rolePriority[req.app.locals.role] > rolePriority["COORDIE"]) {
        res.statusCode = 401;
        res.json({
            error: "unauthorised user",
            message: "authorization token is invalid or expired! please re-login!",
            success: false,
        });
    } else next();
}

export function checkAdminAuthorization(req: Request, res: Response, next) {
    if (rolePriority[req.app.locals.role] > rolePriority["ADMIN"]) {
        res.statusCode = 401;
        res.json({
            error: "unauthorised user",
            message: "authorization token is invalid or expired! please re-login!",
            success: false,
        });
    } else next();
}
