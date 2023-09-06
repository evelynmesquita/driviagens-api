import httpStatus from "http-status";
import passengersService from "../services/passengers.services.js";

const create = async (req, res) => {
    await passengersService.create(req.body);
    res.sendStatus(httpStatus.CREATED);
};

const passengersController = { create };
export default passengersController;