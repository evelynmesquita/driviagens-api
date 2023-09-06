import { Router } from "express";
import passengersRoutes from "./passengers.routes.js";

const router = Router();
router.use(passengersRoutes);


export default router;
