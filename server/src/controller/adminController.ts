import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const addDepartmentEvent = async (req: Request, res: Response, next) => {
    const { name, organizer } = req.body;
    try {
        await prisma.departmentEvent.create({
            data: { name, organizer },
        });

        res.statusCode = 200;
        res.json({ message: "department event added!", success: true });
    } catch (error) {
        console.log("error occured in the addDepartmentEvent() controller!");
        next(error);
    }
};

const removeDepartmentEvent = async (req: Request, res: Response, next) => {
    const { id } = req.body;
    try {
        await prisma.departmentEvent.delete({
            where: { id },
        });

        res.statusCode = 200;
        res.json({ message: "department event deleted!", success: true });
    } catch (error) {
        console.log("error occured in the removeDepartmentEvent() controller!");
        next(error);
    }
};

const addDepartmentCoordinator = async (req: Request, res: Response, next) => {
    const { userId, deptEventId } = req.body;
    try {
        await prisma.departmentCoordinator.create({
            data: { userId, deptEventId },
        });

        await prisma.user.update({
            where: { id: userId },
            data: { role: "COORDIE" },
        });

        res.statusCode = 200;
        res.json({ message: "user promoted to department coordinator!", success: true });
    } catch (error) {
        console.log("error occured in the addDepartmentCoordinator() controller!");
        next(error);
    }
};

const removeDepartmentCoordinator = async (req: Request, res: Response, next) => {
    const { userId, deptEventId } = req.body;
    try {
        await prisma.departmentCoordinator.delete({
            where: { userId_deptEventId: { userId, deptEventId } },
        });
        await prisma.user.update({
            where: { id: userId },
            data: { role: "USER" },
        });

        res.statusCode = 200;
        res.json({ message: "user demoted to regular user!", success: true });
    } catch (error) {
        console.log("error occured in the removeDepartmentCoordinator() controller!");
        next(error);
    }
};

const addEvent = async (req: Request, res: Response, next) => {
    const { name, details, maxTeamSize, minTeamSize, deptEventId } = req.body;
    try {
        await prisma.event.create({
            data: { name, details, maxTeamSize, minTeamSize, deptEventId },
        });

        res.statusCode = 200;
        res.json({ message: "event added!", success: true });
    } catch (error) {
        console.log("error occured in the addEvent() controller!");
        next(error);
    }
};

const removeEvent = async (req: Request, res: Response, next) => {
    const { id } = req.body;
    try {
        await prisma.event.delete({
            where: { id },
        });

        res.statusCode = 200;
        res.json({ message: "event deleted!", success: true });
    } catch (error) {
        console.log("error occured in the removeEvent() controller!");
        next(error);
    }
};

const addEventCoordinator = async (req: Request, res: Response, next) => {
    const { userId, eventId } = req.body;
    try {
        await prisma.eventCoordinator.create({
            data: { userId, eventId },
        });

        res.statusCode = 200;
        res.json({ message: "user added as event coordinator!", success: true });
    } catch (error) {
        console.log("error occured in the addEventCoordinator() controller!");
        next(error);
    }
};

const removeEventCoordinator = async (req: Request, res: Response, next) => {
    const { userId, eventId } = req.body;
    try {
        await prisma.eventCoordinator.delete({
            where: { userId_eventId: { userId, eventId } },
        });

        res.statusCode = 200;
        res.json({ message: "user removed from event coordinator!", success: true });
    } catch (error) {
        console.log("error occured in the removeDepartmentCoordinator() controller!");
        next(error);
    }
};

export {
    addDepartmentEvent,
    removeDepartmentEvent,
    addDepartmentCoordinator,
    removeDepartmentCoordinator,
    addEvent,
    removeEvent,
    addEventCoordinator,
    removeEventCoordinator,
};
