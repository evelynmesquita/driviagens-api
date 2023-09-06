import httpStatus from "http-status";

export const schemaValidation = (schema) => {
    return (req, res, next) => {

        const { error } = schema.validate(req.body, { abortEarly: false });
        if (error) return res.status(httpStatus.UNPROCESSABLE_ENTITY).send({ message: error.details.map(({ message }) => message) });

        next();
    }
};