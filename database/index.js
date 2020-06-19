const { Pool, Client } = require('pg');
const config = require('../config.js');


const pool = new Pool({
  user: config.user,
  password: config.dbPassword,
  host: config.host,
  database: config.database,
  port: config.port,
});

