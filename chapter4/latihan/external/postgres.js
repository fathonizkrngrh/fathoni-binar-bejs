const { Client } = require("pg");

const { HTTP_PORT, DB_USER, DB_HOST, DB_NAME, DB_PASSWORD, DB_PORT } =
  process.env;

const client = new Client({
  user: DB_USER,
  host: DB_HOST,
  database: DB_NAME,
  password: DB_PASSWORD,
  port: DB_PORT,
});

module.exports = client;
