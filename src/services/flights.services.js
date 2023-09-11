import Joi from "joi";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat.js";
import flightsRepository from "../repositories/flights.repository.js";
import error from "../errors/errors.js";

dayjs.extend(customParseFormat);

const validateDateFormat = (date) => {
    const result = Joi.date().format('DD-MM-YYYY').utc().validate(date);
    if (result.error) {
        throw error.unprocessableEntity("The date format must adhere to 'DD-MM-YYYY'");
    }
};

const validateDateOrder = (smallerDate, biggerDate) => {
    if (dayjs(smallerDate, "DD-MM-YYYY").isAfter(dayjs(biggerDate, "DD-MM-YYYY"))) {
        throw error.badRequest('The bigger-date must be after the smaller-date');
    }
};

const create = async (body) => {
    const { date } = body;

    if (dayjs().isAfter(dayjs(date, "YYYY-MM-DD"))) {
        throw error.unprocessableEntity("The flight date must be after today's date");
    }

    const createFlight = flightsRepository.create(body);

   // if(!createFlight) throw error.notFound("This destination doesn't exists")

  
    return createFlight
};

const read = async (query) => {
    const { origin, destination, 'bigger-date': biggerDate, 'smaller-date': smallerDate, page } = query;

    if (page && page <= 0) {
        throw error.badRequest('The query page cannot be equal or less than zero');
    }

    if (biggerDate || smallerDate) {
        if ((biggerDate && !smallerDate) || (!biggerDate && smallerDate)) {
            throw error.unprocessableEntity('The two query dates are mandatory if at least one is specified');
        }

        validateDateFormat(biggerDate);
        validateDateFormat(smallerDate);
        validateDateOrder(smallerDate, biggerDate);
    }

    const flights = await flightsRepository.read(origin, destination, biggerDate, smallerDate, page);

    if (destination && flights.rowCount === 0) {
        throw error.notFound(`No flights found with the destination: ${destination}${origin ? ` and origin: ${origin}` : ''}`);
    }

    return flights;
};

const flightsService = { create, read };
export default flightsService;