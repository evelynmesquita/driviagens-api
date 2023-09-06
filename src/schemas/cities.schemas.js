import joi from "joi";

export const citiesSchema = joi.object({
    name: joi.string().min(2).max(50).required()
});