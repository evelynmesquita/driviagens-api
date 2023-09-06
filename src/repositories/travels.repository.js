import { db } from "../database/database.connection.js";

const createTravel = ({ passengerId, flightId }) => {
    return db.query(`INSERT INTO travels ("passengerId", "flightId") VALUES ($1, $2);`, [passengerId, flightId]);
};

const searchPassengers = ({ name, page }) => {
    const qtd = 10;
    const params = [];

    let queryString =
        `
            SELECT 
            CONCAT(passengers."firstName", ' ', passengers."lastName") AS passenger, 
            COUNT(flights.id) AS travels
            FROM travels
            JOIN passengers ON travels."passengerId" = passengers.id
            JOIN flights ON travels."flightId" = flights.id
        `;

    if (name) {
        queryString += ` WHERE passengers."firstName" ILIKE $1 OR passengers."lastName" ILIKE $1`;
        params.push(`%${name}%`);
    }

    queryString +=
        `
            GROUP BY passengers.id
            ORDER BY travels DESC, passengers.id
        `;

    if (page) {
        queryString += ` LIMIT ${qtd} OFFSET $${params.length + 1}`;
        params.push((page - 1) * qtd);
    }

    return db.query(queryString, params);
};

const travelsRepository = { create: createTravel, read: searchPassengers };
export default travelsRepository;
