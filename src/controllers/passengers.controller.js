import httpStatus from "http-status";
import passengersService from "../services/passengers.services.js";

const create = async (req, res, next) => {
    try {
        await passengersService.create(req.body);
        res.sendStatus(httpStatus.CREATED);
    } catch (error) {
        next(error)
    }
};

const passengersController = { create };
export default passengersController;