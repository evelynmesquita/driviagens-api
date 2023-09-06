import httpStatus from "http-status";
import flightsService from "../services/flights.services.js";

const create = async (req, res) => {
    await flightsService.create(req.body);
    res.sendStatus(httpStatus.CREATED);
};

const read = async (req, res) => {
    const { rows } = await flightsService.read(req.query);
    res.send(rows);
};

const flightsController = { create, read };
export default flightsController;