import express, { Request, Response } from "express";
import {
    getAllDepartmentEvents,
    getDepartmentCoordinators,
    getDepartmentEvents,
    getEventCoordinators,
    getEventSponsors,
} from "../controller/mainController";

const router = express.Router();

// middleware for mainRouter
router.use((req: Request, res: Response, next) => {
    console.log("Triggering the main router!!");
    next();
});

router.get("/dept-event", getAllDepartmentEvents);

router.post("/event", getDepartmentEvents);

router.post("/dept-coordie", getDepartmentCoordinators);

router.post("/event-coordie", getEventCoordinators);

router.post("/event-sponsor", getEventSponsors);

export default router;
