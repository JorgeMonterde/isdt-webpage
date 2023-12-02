const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
    user: process.env.PG_USER, 
    host: process.env.PG_HOST, 
    database: process.env.PG_DATABASE,
    password: process.env.PG_PASSWORD,
    ssl: true,
    max: 20,
    idleTimeoutMillis: 30000,
    connectionTimeoutMillis: 2000,
})
module.exports = pool;
