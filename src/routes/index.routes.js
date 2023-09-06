import { Router } from "express";
import { errorHandling } from "../middlewares/error.middleware.js";
import citiesRouter from "./cities.routes.js";
import passangersRouter from "./passengers.routes.js";

const router = Router();
router.use(citiesRouter);
router.use(passangersRouter);
router.use(errorHandling);


export default router;
