/*const mysql2 = require("mysql2");

const db = mysql2.createConnection({
        host: "localhost",
    user:"root",
    password: "",
    database: "pkl2"
});
module.exports = db; */


require("dotenv").config();

const { Pool } = require("pg");

const db = new Pool({
  connectionString: process.env.DATABASE_URL,
});

module.exports = db;