import express, { Request, Response } from "express";
import {
    createTeam,
    removeTeam,
    getUserDetails,
    updateUserDetails,
    sendInviteToUser,
    respondToTeamInvite,
    eventParticipate,
    eventUnparticipate,
} from "../controller/userController";
import { checkUserAuthorization } from "../middleware/authHandler";

const router = express.Router();

// middleware for userRouter
router.use((req: Request, res: Response, next) => {
    console.log("Triggering the user router!!");
    next();
});

router.route("/").get(checkUserAuthorization, getUserDetails).put(checkUserAuthorization, updateUserDetails);

router.route("/team").post(checkUserAuthorization, createTeam).delete(checkUserAuthorization, removeTeam);

router
    .route("/team-invite")
    .post(checkUserAuthorization, sendInviteToUser)
    .put(checkUserAuthorization, respondToTeamInvite);

router
    .route("/participate")
    .post(checkUserAuthorization, eventParticipate)
    .delete(checkUserAuthorization, eventUnparticipate);

export default router;
