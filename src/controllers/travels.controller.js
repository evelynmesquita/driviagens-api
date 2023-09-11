import httpStatus from "http-status";
import travelsService from "../services/travels.service.js";

const create = async (req, res, next) => {
    try {
        await travelsService.create(req.body);
        res.sendStatus(httpStatus.CREATED);
    } catch (error) {
        next(error)
    }
};

const read = async (req, res, next) => {
    try {
        const { rows } = await travelsService.read(req.query);
        res.send(rows);
    } catch (error) {
        next(error)
    }
};

const travelsController = { create, read };
export default travelsController;