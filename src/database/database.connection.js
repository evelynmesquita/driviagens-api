import dotenv from 'dotenv';
import pg from 'pg';

dotenv.config();
const { DATABASE_URL } = process.env;

const configDatabase = {
  connectionString: DATABASE_URL
};
const { Pool } = pg;

export const db = new Pool(configDatabase);

if (process.env.NODE_ENV === "prod") configDatabase.ssl = true;

db.connect((error, client, done) => {
  if (error) return console.log('Erro ao conectar ao banco de dados:', error);
  console.log('Conexão bem-sucedida com o banco de dados PostgreSQL');
  done();
});