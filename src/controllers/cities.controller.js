import httpStatus from "http-status";
import citiesService from "../services/cities.services.js";

const create = async (req, res) => {
    await citiesService.create(req.body);
    res.sendStatus(httpStatus.CREATED)
};

const citiesController = { create };
export default citiesController;