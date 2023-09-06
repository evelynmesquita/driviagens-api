import passengersRepository from "../repositories/passengers.repository.js";

const create = (body) => {
    return passengersRepository.create(body);
};

const passengersService = { create };
export default passengersService;