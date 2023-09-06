import { Router } from "express";
import { errorHandling } from "../middlewares/error.middleware.js";
import citiesRouter from "./cities.routes.js";

const router = Router();
router.use(citiesRouter);
router.use(errorHandling);


export default router;
