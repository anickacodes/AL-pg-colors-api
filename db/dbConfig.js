const pgp = require("pg-promise")();
// connection to database

require("dotenv").config();

// tells pg(postgres) which database we're connecting to
const cn = {
  host: process.env.PG_HOST,
  port: process.env.PG_PORT,
  database: process.env.PG_DATABASE,
  user: process.env.PG_USER,
};

// Connect to colors_dev db
const db = pgp(cn);

module.exports = db;
