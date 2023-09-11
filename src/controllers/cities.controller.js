import httpStatus from "http-status";
import citiesService from "../services/cities.services.js";

const create = async (req, res, next) => {
    try {
        await citiesService.create(req.body);
        res.sendStatus(httpStatus.CREATED)
    } catch (error) {
        next(error)
    }
};

const citiesController = { create };
export default citiesController;