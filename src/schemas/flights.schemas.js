import JoiDate from '@joi/date';
import Joi from "joi";

export const flightSchema = Joi.object({
    origin: Joi.number().integer().required(),
    destination: Joi.number().integer().required(),
    date: Joi.extend(JoiDate).date().format('YYYY-MM-DD').utc().required()
});