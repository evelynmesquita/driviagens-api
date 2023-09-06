import httpStatus from "http-status";

const errorStatusMap = {
  '23503': httpStatus.NOT_FOUND,
  '23505': httpStatus.CONFLICT,
  '23514': httpStatus.CONFLICT,
};

export const errorHandling = (error, req, res, next) => {
  const { message, code, status } = error;

  const mappedStatus = errorStatusMap[code];

  const responseStatus = mappedStatus || status || httpStatus.INTERNAL_SERVER_ERROR;

  res.status(responseStatus).send({ message });
};
