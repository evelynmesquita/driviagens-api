import httpStatus from "http-status";

export const internalServerError = (message = 'Internal Server Error') => ({
    status: httpStatus.INTERNAL_SERVER_ERROR,
    message,
});

export const unprocessableEntity = (message = 'Unprocessable Entity') => ({
    status: httpStatus.UNPROCESSABLE_ENTITY,
    message,
});

export const notFound = (message = 'Not Found') => ({
    status: httpStatus.NOT_FOUND,
    message,
});

export const badRequest = (message = 'Bad Request') => ({
    status: httpStatus.BAD_REQUEST,
    message,
});

export const conflict = (message = 'Conflict') => ({
    status: httpStatus.CONFLICT,
    message,
});


const error = { internalServerError, unprocessableEntity, notFound, badRequest, conflict };
export default error;