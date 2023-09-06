import { Router } from "express";
import travelsController from "../controllers/travels.controller.js";
import { schemaValidation } from "../middlewares/schemaValidation.middleware.js";
import { travelsSchema } from "../schemas/travels.schemas.js";

const travelsRouter = Router();

travelsRouter.post('/travels', schemaValidation(travelsSchema), travelsController.create);
travelsRouter.get('/passengers/travels', travelsController.read);

export default travelsRouter;