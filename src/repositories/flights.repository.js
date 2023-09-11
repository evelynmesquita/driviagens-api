import { db } from "../database/database.connection.js";

const create = ({ origin, destination, date }) => {
    return db.query(
        `INSERT INTO flights (origin, destination, date) VALUES ($1, $2, $3) RETURNING id;`,
        [origin, destination, date]
    );
};

const read = (origin, destination, biggerDate, smallerDate, page) => {
    const qtd = 10;
    const params = [];

    let queryString =
        `
            SELECT flights.id, origin.name AS origin, destination.name AS destination, 
            TO_CHAR(flights.date, 'DD-MM-YYYY') AS date FROM flights JOIN cities AS origin 
            ON flights.origin = origin.id JOIN cities AS destination ON flights.destination = destination.id
        `;

    if (origin) {
        queryString += ` WHERE origin.name = $${params.length + 1}`;
        params.push(origin);
    }

    if (destination) {
        queryString += `${origin ? ' AND' : ' WHERE'} destination.name = $${params.length + 1}`;
        params.push(destination);
    }

    if (biggerDate || smallerDate) {
        queryString += `${origin || destination ? ' AND' : ' WHERE'} flights.date BETWEEN $${params.length + 1} AND $${params.length + 2}`;
        params.push(smallerDate, biggerDate);
    }

    if (page) {
        queryString += ` ORDER BY flights.date LIMIT ${qtd} OFFSET $${params.length + 1}`;
        params.push((page - 1) * qtd);
    }

    return db.query(queryString, params);
};

const flightsRepository = { create, read };
export default flightsRepository;