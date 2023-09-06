import httpStatus from "http-status";
import travelsService from "../services/travels.service.js";

const create = async (req, res) => {
    await travelsService.create(req.body);
    res.sendStatus(httpStatus.CREATED);
};

const read = async (req, res) => {
    const { rows } = await travelsService.read(req.query);
    res.send(rows);
};

const travelsController = { create, read };
export default travelsController;