import httpStatus from "http-status";
import flightsService from "../services/flights.services.js";

const create = async (req, res, next) => {
    try {
        await flightsService.create(req.body);
        res.sendStatus(httpStatus.CREATED);
        
    } catch (error) {
        next(error)
        
    }
};

const read = async (req, res) => {
    const { rows } = await flightsService.read(req.query);
    res.send(rows);
};

const flightsController = { create, read };
export default flightsController;