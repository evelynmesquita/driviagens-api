import error from "../errors/errors.js";
import travelsRepository from "../repositories/travels.repository.js";

const create = (body) => {
    return travelsRepository.create(body);
};

const read = async (query) => {
    if (query.page && query.page <= 0) throw error.badRequest('The query page cannot be equal or less than zero');

    const travels = await travelsRepository.read(query);
    if (travels.rowCount > 10) throw error.internalServerError('Too many results');

    return travels;
};

const travelsService = { create, read };
export default travelsService;