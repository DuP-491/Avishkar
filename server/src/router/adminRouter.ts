import express, { Request, Response } from "express";
import {
    addDepartmentCoordinator,
    addDepartmentEvent,
    removeDepartmentCoordinator,
    removeDepartmentEvent,
    addEvent,
    updateEvent,
    removeEvent,
    addEventCoordinator,
    removeEventCoordinator,
    getParticipationInEvent,
    addEventSponsor,
    removeEventSponsor,
    updateEventSponsor,
} from "../controller/adminController";
import { checkAdminAuthorization, checkCoordieAuthrorization, checkUserAuthorization } from "../middleware/authHandler";

const router = express.Router();

// middleware for the adminRouter
router.use((req: Request, res: Response, next) => {
    console.log("Triggering the admin router!!");
    next();
});

router
    .route("/dept-event")
    .post(checkUserAuthorization, checkAdminAuthorization, addDepartmentEvent)
    .delete(checkUserAuthorization, checkAdminAuthorization, removeDepartmentEvent);

router
    .route("/dept-coordie")
    .post(checkUserAuthorization, checkAdminAuthorization, addDepartmentCoordinator)
    .delete(checkUserAuthorization, checkAdminAuthorization, removeDepartmentCoordinator);

router
    .route("/event")
    .post(checkUserAuthorization, checkCoordieAuthrorization, addEvent)
    .put(checkUserAuthorization, checkCoordieAuthrorization, updateEvent)
    .delete(checkUserAuthorization, checkCoordieAuthrorization, removeEvent);

router
    .route("/event/:eventId")
    .get(checkUserAuthorization, checkCoordieAuthrorization, getParticipationInEvent);

router
    .route("/event-coordie")
    .post(checkUserAuthorization, checkCoordieAuthrorization, addEventCoordinator)
    .delete(checkUserAuthorization, checkCoordieAuthrorization, removeEventCoordinator);

router
    .route("/event-sponsor")
    .post(checkUserAuthorization, checkCoordieAuthrorization, addEventSponsor)
    .put(checkUserAuthorization, checkCoordieAuthrorization, updateEventSponsor)
    .delete(checkUserAuthorization, checkCoordieAuthrorization, removeEventSponsor);

export default router;
