import express, { Request, Response } from "express";
import {
    addDepartmentCoordinator,
    addDepartmentEvent,
    removeDepartmentCoordinator,
    removeDepartmentEvent,
    addEvent,
    removeEvent,
    addEventCoordinator,
    removeEventCoordinator,
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
    .delete(checkUserAuthorization, checkCoordieAuthrorization, removeEvent);

router
    .route("/event-coordie")
    .post(checkUserAuthorization, checkCoordieAuthrorization, addEventCoordinator)
    .delete(checkUserAuthorization, checkCoordieAuthrorization, removeEventCoordinator);

export default router;
