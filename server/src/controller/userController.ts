import { PrismaClient, RequestStatus } from "@prisma/client";
import { Request, Response } from "express";

const prisma = new PrismaClient();

const getUserDetails = async (req: Request, res: Response) => {
    const details = req.app.locals;
    delete details["id"];
    delete details["password"];
    delete details["salt"];

    res.statusCode = 200;
    res.json({ details, success: true });
};

const updateUserDetails = async (req: Request, res: Response, next) => {
    const { name, username, collegeName, mobile, resumeLink } = req.body;
    const id = req.app.locals.id;

    try {
        if (username !== undefined && username !== req.app.locals.username) {
            const user = await prisma.user.findFirst({
                where: {
                    username,
                },
            });
            if (user !== null) {
                res.statusCode = 400;
                return res.json({
                    error: "bad request",
                    message: "username is already taken!",
                    success: false,
                });
            }
        }

        await prisma.user.update({
            where: { id },
            data: { name, username, collegeName, mobile, resumeLink },
        });

        res.json({ message: "user details updated successfully!", success: true });
    } catch (error) {
        console.log("error occured in the updateUserDetails() controller!");
        next(error);
    }
};

const createTeam = async (req: Request, res: Response, next) => {
    const { id, isFeePaid } = req.app.locals;
    if (!isFeePaid) {
        res.statusCode = 400;
        res.json({
            error: "fee payment issue",
            message: "cannot create team until participation fee is paid!",
            success: false,
        });
    } else {
        try {
            const team = await prisma.team.create({
                data: { leader: id },
            });
            await prisma.teamMember.create({
                data: { userId: id, teamId: team.id, status: RequestStatus.ACCEPTED },
            });

            res.statusCode = 200;
            res.json({ message: "team created!", success: true });
        } catch (error) {
            console.log("error occured in the createTeam() controller!");
            next(error);
        }
    }
};

const removeTeam = async (req: Request, res: Response, next) => {
    const { teamId } = req.body;
    const { id } = req.app.locals;
    try {
        const team = await prisma.team.findFirst({
            where: { id: teamId },
        });
        if (team === null) {
            res.statusCode = 404;
            res.json({ error: "team not found!", success: false });
        } else if (team.leader !== id) {
            res.statusCode = 401;
            res.json({ error: "not authorised! only leader can delete a team!", success: false });
        } else {
            await prisma.teamMember.deleteMany({
                where: { teamId },
            });
            await prisma.participation.deleteMany({
                where: { teamId },
            });
            await prisma.team.delete({
                where: { id: teamId },
            });

            res.statusCode = 200;
            res.json({ message: "team removed!", success: true });
        }
    } catch (error) {
        console.log("error occured in the removeTeam() controller!");
        next(error);
    }
};

const getTeamInvite = async (req: Request, res: Response, next) => {
    const { id } = req.app.locals;
    try {
        const teams = await prisma.teamMember.findMany({
            where: { userId: id },
            include: { team: true },
        });
        res.statusCode = 200;
        res.json({ teams, success: true });
    } catch (error) {
        console.log("error occured in the getTeamInvite() controller!");
        next(error);
    }
};

const getTeamMembers = async (req: Request, res: Response, next) => {
    const { id } = req.query;
    try {
        const team = await prisma.team.findFirst({
            where: { id: Number(id) },
        });
        if (team === null) {
            res.statusCode = 404;
            res.json({ error: "team not found!", success: false });
        } else {
            const members = await prisma.teamMember.findMany({
                where: { teamId: team.id },
                include: { user: true },
            });
            res.statusCode = 200;
            res.json({ members, success: true });
        }
    } catch (error) {
        console.log("error occured in the getTeamMembers() controller!");
        next(error);
    }
};

const sendInviteToUser = async (req: Request, res: Response, next) => {
    const { teamId, username } = req.body;
    const { id } = req.app.locals;
    try {
        const user = await prisma.user.findFirst({ where: { username } });
        const team = await prisma.team.findFirst({ where: { id: teamId } });
        const participation = await prisma.participation.findFirst({ where: { teamId } });

        if (team === null || user === null) {
            res.statusCode = 404;
            res.json({ error: "user / team not found!", success: false });
        } else if (participation) {
            res.statusCode = 400;
            res.json({ error: "cannot send invite, team has already participated in events!", success: false });
        } else if (team.leader !== id) {
            res.statusCode = 401;
            res.json({ error: "not authorised! only leader can send invite to a player!", success: false });
        } else {
            await prisma.teamMember.create({
                data: { userId: user.id, teamId },
            });
            res.statusCode = 200;
            res.json({ message: "invite sent!", success: true });
        }
    } catch (error) {
        console.log("error occured in the sendInviteToUser() controller!");
        next(error);
    }
};

const respondToTeamInvite = async (req: Request, res: Response, next) => {
    const { teamId, status } = req.body;
    const { id, isFeePaid } = req.app.locals;

    if (!isFeePaid) {
        res.statusCode = 400;
        res.json({
            error: "fee payment issue",
            message: "cannot create team until participation fee is paid!",
            success: false,
        });
    } else {
        try {
            const teamInvite = await prisma.teamMember.findFirst({ where: { teamId, userId: id } });
            const team = await prisma.team.findFirst({ where: { id: teamId } });

            if (teamInvite === null || team === null) {
                res.statusCode = 404;
                res.json({ error: "team invite not found!", success: false });
            } else {
                if (status === "ACCEPTED") {
                    const newSize = team.size + 1;

                    await prisma.team.update({
                        where: { id: teamId },
                        data: { size: newSize },
                    });
                    await prisma.teamMember.update({
                        where: { userId_teamId: { userId: id, teamId } },
                        data: { status },
                    });
                } else {
                    await prisma.teamMember.delete({
                        where: { userId_teamId: { userId: id, teamId } },
                    });
                }
                res.statusCode = 200;
                res.json({ message: "invite response registered!", success: false });
            }
        } catch (error) {
            console.log("error occured in the respondToTeamInvite() controller!");
            next(error);
        }
    }
};

const deleteUserTeamInvite = async (req: Request, res: Response, next) => {
    const { userId, teamId } = req.body;
    const { id } = req.app.locals;
    try {
        const teamInvite = await prisma.teamMember.findFirst({ where: { teamId, userId } });
        const team = await prisma.team.findFirst({ where: { id: teamId } });
        const participation = await prisma.participation.findFirst({ where: { teamId } });

        if (teamInvite === null || team === null) {
            res.statusCode = 404;
            res.json({ error: "team member / invite not found!", success: false });
        } else if (participation) {
            res.statusCode = 400;
            res.json({
                error: "cannot delete member / invite, team has already participated in events!",
                success: false,
            });
        } else if (id !== team.leader) {
            res.statusCode = 401;
            res.json({ error: "not authorised! only leader can send invite to a player!", success: false });
        } else {
            await prisma.teamMember.delete({ where: { userId_teamId: { userId, teamId } } });
            if (teamInvite.status === "ACCEPTED") {
                const newSize = team.size - 1;
                await prisma.team.update({
                    where: { id: teamId },
                    data: { size: newSize },
                });
            }

            res.statusCode = 200;
            res.json({ message: "member / invite deleted!", success: true });
        }
    } catch (error) {
        console.log("error occured in the deleteUserTeamInvite() controller!");
        next(error);
    }
};

const eventParticipate = async (req: Request, res: Response, next) => {
    const { teamId, eventId } = req.body;
    const { id } = req.app.locals;
    try {
        const team = await prisma.team.findFirst({ where: { id: teamId } });
        const pendingInvite = await prisma.teamMember.findFirst({ where: { teamId, status: RequestStatus.PENDING } });
        const event = await prisma.event.findFirst({ where: { id: eventId } });

        if (team === null || event === null) {
            res.statusCode = 404;
            res.json({ error: "team / event not found!", success: false });
        } else if (team.leader !== id) {
            res.statusCode = 401;
            res.json({ error: "only team leader can add participation!", success: false });
        } else if (pendingInvite) {
            res.statusCode = 400;
            res.json({ error: "team invites are still pending!", success: false });
        } else if (team.size > event.maxTeamSize || team.size < event.minTeamSize) {
            res.statusCode = 400;
            res.json({ error: "team size constraints don't match with the participating team!", success: false });
        } else {
            await prisma.participation.create({ data: { teamId, eventId } });
            res.statusCode = 200;
            res.json({ message: "team participation done!", success: true });
        }
    } catch (error) {
        console.log("error occured in the eventParticipate() controller!");
        next(error);
    }
};

const eventUnparticipate = async (req: Request, res: Response, next) => {
    const { teamId, eventId } = req.body;
    const { id } = req.app.locals;
    try {
        const team = await prisma.team.findFirst({ where: { id: teamId } });

        if (team === null) {
            res.statusCode = 404;
            res.json({ error: "team not found!", success: false });
        } else if (team.leader !== id) {
            res.statusCode = 401;
            res.json({ error: "only team leader can add participation!", success: false });
        } else {
            await prisma.participation.delete({
                where: { teamId_eventId: { teamId, eventId } },
            });
            res.statusCode = 200;
            res.json({ message: "team unparticipation done!", success: true });
        }
    } catch (error) {
        console.log("error occured in the eventUnparticipate() controller!");
        next(error);
    }
};

export {
    getUserDetails,
    updateUserDetails,
    createTeam,
    removeTeam,
    getTeamInvite,
    getTeamMembers,
    sendInviteToUser,
    respondToTeamInvite,
    deleteUserTeamInvite,
    eventParticipate,
    eventUnparticipate,
};
