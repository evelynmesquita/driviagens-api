import { Router } from "express";
import citiesController from "../controllers/cities.controller.js";
import { schemaValidation } from "../middlewares/schemaValidation.middleware.js";
import { citiesSchema } from "../schemas/cities.schemas.js"

const citiesRouter = Router();

citiesRouter.post('/cities', schemaValidation(citiesSchema), citiesController.create);

export default citiesRouter;