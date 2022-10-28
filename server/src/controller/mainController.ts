import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

const prisma = new PrismaClient();

const getAllDepartmentEvents = async (req: Request, res: Response, next) => {
    // get a list of all the department events
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
    // get a list of all the events under a department event
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
    // get a list of all the department coordinators of a department event
    const deptEventId = req.body.deptEventId;
    try {
        const deptEventCoordies = await prisma.departmentCoordinator.findMany({
            where: { deptEventId },
            include: { user: { select: { name: true, email: true, mobile: true, username: true } } },
        });

        res.statusCode = 200;
        res.json({ deptEventCoordies, success: true });
    } catch (error) {
        console.log("error occured in the getDepartmentCoordinators() controller!");
        next(error);
    }
};

const getEventCoordinators = async (req: Request, res: Response, next) => {
    // get a list of all the event coordinators of an event
    const eventId = req.body.eventId;
    try {
        const eventCoordies = await prisma.eventCoordinator.findMany({
            where: { eventId },
            include: { user: { select: { name: true, email: true, mobile: true, username: true } } },
        });

        res.statusCode = 200;
        res.json({ eventCoordies, success: true });
    } catch (error) {
        console.log("error occured in the getEventCoordinators() controller!");
        next(error);
    }
};

const getEventSponsors = async (req: Request, res: Response, next) => {
    // get a list of all the event sponsors of an event
    const eventId = req.body.eventId;
    try {
        const eventSponsors = await prisma.eventSponsor.findMany({ where: { eventId } });

        res.statusCode = 200;
        res.json({ eventSponsors, success: true });
    } catch (error) {
        console.log("error occured in the getEventSponsors() controller!");
        next(error);
    }
};

export {
    getAllDepartmentEvents,
    getDepartmentEvents,
    getDepartmentCoordinators,
    getEventCoordinators,
    getEventSponsors,
};
