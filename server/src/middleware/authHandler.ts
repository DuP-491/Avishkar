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

// returns if r1 has a higher priority than r2
function comparePriority(r1: string, r2: string) {
    if (r1 === Role.ADMIN) return true;
    else if (r1 === Role.COORDIE) {
        if (r2 === Role.ADMIN) return false;
        else return true;
    } else {
        if (r2 === Role.USER) return true;
        else return false;
    }
}

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
    if (!comparePriority(req.app.locals.role, Role.COORDIE)) {
        res.statusCode = 401;
        res.json({
            error: "unauthorised user",
            message: "authorization token is invalid or expired! please re-login!",
            success: false,
        });
    } else next();
}

export function checkAdminAuthorization(req: Request, res: Response, next) {
    if (!comparePriority(req.app.locals.role, Role.ADMIN)) {
        res.statusCode = 401;
        res.json({
            error: "unauthorised user",
            message: "authorization token is invalid or expired! please re-login!",
            success: false,
        });
    } else next();
}
