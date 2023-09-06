import Joi from "joi";

export const travelsSchema = Joi.object({
  passengerId: Joi.number().integer().required(),
  flightId: Joi.number().integer().required()
});