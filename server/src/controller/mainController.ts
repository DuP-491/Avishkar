import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

const prisma = new PrismaClient();

const getAllDepartmentEvents = async (req: Request, res: Response, next) => {
    try {
        const departmentEvents = await prisma.departmentEvent.findMany();

        res.statusCode = 200;
        res.json({ departmentEvents, success: true });
    } catch (error) {
        console.log("error occured in the getAllDepartmentEvents() controller!");
        next(error);
    }
};

const getDepartmentEvents = async (req: Request, res: Response, next) => {
    const deptEventId = req.body.deptEventId;
    try {
        const events = await prisma.event.findMany({
            where: { deptEventId },
        });

        res.statusCode = 200;
        res.json({ events, success: true });
    } catch (error) {
        console.log("error occured in the getDepartmentEvents() controller!");
        next(error);
    }
};

const getDepartmentCoordinators = async (req: Request, res: Response, next) => {
    const deptEventId = req.body.deptEventId;
    try {
        const deptEventCoordies = await prisma.departmentCoordinator.findMany({
            where: { deptEventId },
            include: { user: true },
        });

        res.statusCode = 200;
        res.json({ deptEventCoordies, success: true });
    } catch (error) {
        console.log("error occured in the getDepartmentCoordinators() controller!");
        next(error);
    }
};

const getEventCoordinators = async (req: Request, res: Response, next) => {
    const eventId = req.body.eventId;
    try {
        const eventCoordies = await prisma.eventCoordinator.findMany({
            where: { eventId },
            include: { user: true },
        });

        res.statusCode = 200;
        res.json({ eventCoordies, success: true });
    } catch (error) {
        console.log("error occured in the getEventCoordinators() controller!");
        next(error);
    }
};

const getUserLeaderboard = async (req: Request, res: Response, next) => {
    try {
        const topScores = await prisma.user.findMany({
            take: 10,
            orderBy: {
                score: "desc",
            },
        });

        res.statusCode = 200;
        res.json({ topScores, success: true });
    } catch (error) {
        console.log("error occured in the getUserLeaderboard() controller!");
        next(error);
    }
};

export {
    getAllDepartmentEvents,
    getDepartmentEvents,
    getDepartmentCoordinators,
    getEventCoordinators,
    getUserLeaderboard,
};
