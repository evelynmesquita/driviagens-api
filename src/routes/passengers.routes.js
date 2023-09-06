import { Router } from "express";
import passengersController from "../controllers/passengers.controller.js";
import { schemaValidation } from "../middlewares/schemaValidation.middleware.js";
import { passengerSchema } from "../schemas/passengers.schemas.js";

const passangersRouter = Router();

passangersRouter.post('/passengers', schemaValidation(passengerSchema), passengersController.create);

export default passangersRouter;