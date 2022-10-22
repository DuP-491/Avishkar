import { PrismaClient, RequestStatus } from "@prisma/client";
import { Request, Response } from "express";

const prisma = new PrismaClient();

const getUserDetails = async (req: Request, res: Response) => {
    const details = req.app.locals;

    res.statusCode = 200;
    res.json({ details, success: true });
};

const updateUserDetails = async (req: Request, res: Response, next) => {
    const { name, username, collegeName, mobile, resumeLink } = req.body;
    const id = req.app.locals.id;

    try {
        // check if the updated username is already taken or not
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
        // updating the sent details
        await prisma.user.update({
            where: { id },
            data: { name, username, collegeName, mobile, resumeLink },
        });

        res.statusCode = 200;
        res.json({ message: "user details updated successfully!", success: true });
    } catch (error) {
        console.log("error occured in the updateUserDetails() controller!");
        next(error);
    }
};

const createTeam = async (req: Request, res: Response, next) => {
    const { id, isFeePaid } = req.app.locals;
    // user can only create/join team if the fee is paid
    if (!isFeePaid) {
        res.statusCode = 400;
        res.json({
            error: "fee payment issue",
            message: "cannot create team until participation fee is paid!",
            success: false,
        });
    } else {
        try {
            // creating a new team entry and updating the default name of the team
            const team = await prisma.team.create({
                data: { leader: id },
            });
            const name = "Team-" + team.id.toString();
            await prisma.team.update({
                where: { id: team.id },
                data: { name },
            });

            // creating the team member entry for the leader of the team
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

const updateTeam = async (req: Request, res: Response, next) => {
    const { teamId, name } = req.body;
    const { id } = req.app.locals;
    try {
        const team = await prisma.team.findFirst({
            where: { id: teamId },
        });

        if (team === null) {
            // case when team doesn't exists
            res.statusCode = 404;
            res.json({ error: "team not found!", success: false });
        } else if (team.leader !== id) {
            // case when another person than leader tries to update details
            res.statusCode = 401;
            res.json({ error: "not authorised! only leader can update a team!", success: false });
        } else {
            await prisma.team.update({
                where: { id: teamId },
                data: { name },
            });

            res.statusCode = 200;
            res.json({ message: "team updated!", success: true });
        }
    } catch (error) {
        console.log("error occured in the removeTeam() controller!");
        next(error);
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
            // case when team doesn't exists
            res.statusCode = 404;
            res.json({ error: "team not found!", success: false });
        } else if (team.leader !== id) {
            // case when another person than leader tries to update details
            res.statusCode = 401;
            res.json({ error: "not authorised! only leader can delete a team!", success: false });
        } else {
            // deleting all the members of the team
            await prisma.teamMember.deleteMany({
                where: { teamId },
            });
            // deleting all the participation of the team
            await prisma.participation.deleteMany({
                where: { teamId },
            });
            // deleting the team entry
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
        // all the teams of user with id, including pending, accepted etc.
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
            // case when team doesn't exists
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
            // case when team or user doesn't exist
            res.statusCode = 404;
            res.json({ error: "user / team not found!", success: false });
        } else if (participation) {
            // check if the team has already participated in any event
            res.statusCode = 400;
            res.json({ error: "cannot send invite, team has already participated in events!", success: false });
        } else if (team.leader !== id) {
            // check if the person inviting is leader of the team
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

    // only a paid user can create/join a team
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
                res.json({ error: "team or invite not found!", success: false });
            } else {
                if (status === "ACCEPTED") {
                    const newSize = team.size + 1;

                    // updating the new size of the team
                    await prisma.team.update({
                        where: { id: teamId },
                        data: { size: newSize },
                    });
                    // updating PENDING status of the team member
                    await prisma.teamMember.update({
                        where: { userId_teamId: { userId: id, teamId } },
                        data: { status },
                    });
                } else {
                    // deleting the team member entry on REJECTED
                    await prisma.teamMember.delete({
                        where: { userId_teamId: { userId: id, teamId } },
                    });
                }
                res.statusCode = 200;
                res.json({ message: "invite response registered!", success: true });
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
            // case when team or invite doesn't exist
            res.statusCode = 404;
            res.json({ error: "team member / invite not found!", success: false });
        } else if (participation) {
            // check if the team has not already participated in any event
            res.statusCode = 400;
            res.json({
                error: "cannot delete member / invite, team has already participated in events!",
                success: false,
            });
        } else if (id !== team.leader) {
            // check if the request was made by person other than the leader
            res.statusCode = 401;
            res.json({ error: "not authorised! only leader can send invite to a player!", success: false });
        } else {
            await prisma.teamMember.delete({ where: { userId_teamId: { userId, teamId } } });
            if (teamInvite.status === "ACCEPTED") {
                // if an accepted member is kicked out the size of team gets updated
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
            // case when team or event doesn't exist
            res.statusCode = 404;
            res.json({ error: "team / event not found!", success: false });
        } else if (team.leader !== id) {
            // check if the request was made by person other than the leader
            res.statusCode = 401;
            res.json({ error: "only team leader can add participation!", success: false });
        } else if (pendingInvite) {
            // check if there is any pending invite for the participating team
            res.statusCode = 400;
            res.json({ error: "team invites are still pending!", success: false });
        } else if (team.size > event.maxTeamSize || team.size < event.minTeamSize) {
            // checking the appropriate size of the team
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
            // case when team doesn't exist
            res.statusCode = 404;
            res.json({ error: "team not found!", success: false });
        } else if (team.leader !== id) {
            // check if the request was made by person other than the leader
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
    updateTeam,
    removeTeam,
    getTeamInvite,
    getTeamMembers,
    sendInviteToUser,
    respondToTeamInvite,
    deleteUserTeamInvite,
    eventParticipate,
    eventUnparticipate,
};
