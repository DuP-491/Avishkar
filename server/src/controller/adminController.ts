import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const addDepartmentEvent = async (req: Request, res: Response, next) => {
    const { name, organizer, desc } = req.body;
    try {
        await prisma.departmentEvent.create({
            data: { name, organizer, desc },
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
        const user = await prisma.user.findFirst({ where: { id: userId } });
        const departmentEvent = await prisma.departmentEvent.findFirst({ where: { id: deptEventId } });

        if (user === null || departmentEvent === null) {
            res.statusCode = 400;
            res.json({ error: "bad request", message: "user / department event doesn't exist!" });
        } else {
            await prisma.departmentCoordinator.create({
                data: { userId, deptEventId },
            });

            if (user.role === "USER") {
                await prisma.user.update({
                    where: { id: userId }, data: { role: "COORDIE" },
                });
            }

            res.statusCode = 200;
            res.json({ message: "user promoted to department coordinator!", success: true });
        }
    } catch (error) {
        console.log("error occured in the addDepartmentCoordinator() controller!");
        next(error);
    }
};

const removeDepartmentCoordinator = async (req: Request, res: Response, next) => {
    const { userId, deptEventId } = req.body;
    try {
        const user = await prisma.user.findFirst({ where: { id: userId } });
        await prisma.departmentCoordinator.delete({
            where: { userId_deptEventId: { userId, deptEventId } },
        });

        if (user.role !== "ADMIN") {
            await prisma.user.update({
                where: { id: userId }, data: { role: "USER" },
            });
        }

        res.statusCode = 200;
        res.json({ message: "user demoted to regular user!", success: true });
    } catch (error) {
        console.log("error occured in the removeDepartmentCoordinator() controller!");
        next(error);
    }
};

const addEvent = async (req: Request, res: Response, next) => {
    const { name, tagline, details, criteria, rules, psLink, maxTeamSize, minTeamSize, deptEventId, poster } = req.body;
    try {
        await prisma.event.create({
            data: { name, tagline, details, criteria, rules, psLink, maxTeamSize, minTeamSize, deptEventId, poster },
        });

        res.statusCode = 200;
        res.json({ message: "event added!", success: true });
    } catch (error) {
        console.log("error occured in the addEvent() controller!");
        next(error);
    }
};

const updateEvent = async (req: Request, res: Response, next) => {
    const { id, name, tagline, details, criteria, rules, psLink, maxTeamSize, minTeamSize, poster } = req.body;
    try {
        await prisma.event.update({
            where: { id },
            data: { name, tagline, details, criteria, rules, psLink, maxTeamSize, minTeamSize, poster },
        });

        res.statusCode = 200;
        res.json({ message: "event updated!", success: true });
    } catch (error) {
        console.log("error occured in the updateEvent() controller!");
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
    const { email, eventId } = req.body;
    try {
        const user = await prisma.user.findFirst({ where: { email } });
        const event = await prisma.event.findFirst({ where: { id: eventId } });

        if (user === null || event === null) {
            res.statusCode = 404;
            res.json({ error: "not found", message: "user / event doesn't exist!", success: false });
        }
        else {
            await prisma.eventCoordinator.create({
                data: { userId: user.id, eventId },
            });

            res.statusCode = 200;
            res.json({ message: "user added as event coordinator!", success: true });
        }
    } catch (error) {
        console.log("error occured in the addEventCoordinator() controller!");
        next(error);
    }
};

const removeEventCoordinator = async (req: Request, res: Response, next) => {
    const { email, eventId } = req.body;
    try {
        const user = await prisma.user.findFirst({ where: { email } });
        if (user === null) {
            res.statusCode = 404;
            res.json({ error: "not found", message: "user with this email doesn't exist!", success: false });
        }
        else {
            await prisma.eventCoordinator.delete({
                where: { userId_eventId: { userId: user.id, eventId } },
            });

            res.statusCode = 200;
            res.json({ message: "user removed as event coordinator!", success: true });
        }
    } catch (error) {
        console.log("error occured in the removeDepartmentCoordinator() controller!");
        next(error);
    }
};

const addEventSponsor = async (req: Request, res: Response, next) => {
    const { name, poster, title, eventId } = req.body;
    try {
        await prisma.eventSponsor.create({
            data: { name, eventId, title, poster },
        });

        res.statusCode = 200;
        res.json({ message: "event sponsor added!", success: true });
    } catch (error) {
        console.log("error occured in the addEventSponsor() controller!");
        next(error);
    }
};

const updateEventSponsor = async (req: Request, res: Response, next) => {
    const { name, poster, title, eventId } = req.body;
    try {
        await prisma.eventSponsor.update({
            where: { eventId_name: { eventId, name } },
            data: { title, poster },
        });

        res.statusCode = 200;
        res.json({ message: "event sponsor updated!", success: true });
    } catch (error) {
        console.log("error occured in the updateEventSponsor() controller!");
        next(error);
    }
};

const removeEventSponsor = async (req: Request, res: Response, next) => {
    const { name, eventId } = req.body;
    try {
        await prisma.eventSponsor.delete({
            where: { eventId_name: { eventId, name } },
        });

        res.statusCode = 200;
        res.json({ message: "event sponsor removed!", success: true });
    } catch (error) {
        console.log("error occured in the removeDepartmentCoordinator() controller!");
        next(error);
    }
};

const getParticipationInEvent = async (req: Request, res: Response, next) => {
    const eventId = req.params.eventId;
    try {
        const participants = await prisma.$queryRaw`
                SELECT U.id, U.name, U.email, U.mobile, T.id AS teamId, T.name AS teamName, T.leader AS FROM Participation AS P
                INNER JOIN Team AS T ON P.teamId = T.id AND P.eventId = ${eventId}
                INNER JOIN TeamMember AS TM ON TM.teamId = T.id
                INNER JOIN User AS U ON TM.userId = U.id
                ORDER BY teamId
            `;
        let participation = [], i = 0;
        // @ts-ignore
        while(i < participants.length) {
            let currentTeamId = participants[i].teamId, currentTeamName = participants[i].teamName;
            let members = [];
            // @ts-ignore
            while(i < participants.length && participants[i].teamId === currentTeamId) {
                members.push({ name: participants[i].name, email: participants[i].email, mobile: participants[i].mobile });
                ++i;
            }
            participation.push({ teamId: currentTeamId, teamName: currentTeamName, members });
        }
        
        res.statusCode = 200;
        res.json({ participation, success: true });
    } catch (error) {
        console.log("error occured in the getParticipationInEvent() controller!");
        next(error);
    }
};

const updateEventStatus = async (req: Request, res: Response, next) => {
    const eventId = req.params.eventId;
    try {
        const event = await prisma.event.findFirst({ where: { id: eventId } });
        
        if(event === null) {
            res.statusCode = 400;
            res.json({ error: "bad request", message: "event cannot be found!", success: false });
        } else {
            const newStatus = !event.isOpen;
            await prisma.event.update({
                where: { id: eventId },
                data: { isOpen: newStatus },
            });
            
            res.statusCode = 200;
            res.json({ message: "event status updated!", success: true });
        }
    } catch (error) {
        console.log("error occured in the updateEventSponsor() controller!");
        next(error);
    }
};

export {
    addDepartmentEvent,
    removeDepartmentEvent,
    addDepartmentCoordinator,
    removeDepartmentCoordinator,
    addEvent,
    updateEvent,
    removeEvent,
    addEventCoordinator,
    removeEventCoordinator,
    addEventSponsor,
    updateEventSponsor,
    removeEventSponsor,
    getParticipationInEvent,
    updateEventStatus
};
