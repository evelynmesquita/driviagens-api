import { db } from "../database/database.connection.js";

const create = ({ firstName, lastName }) => {
    return db.query(
        `
            INSERT INTO passengers ("firstName", "lastName") VALUES ($1, $2);
        `
        , [firstName, lastName]);
};

const passengersRepository = { create };
export default passengersRepository;