import citiesRepository from "../repositories/cities.repository.js";

const create = (body) => {
    return citiesRepository.create(body);
};

const citiesService = { create };
export default citiesService;