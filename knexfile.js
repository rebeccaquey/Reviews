// Update with your config settings.
const config = require('./config');
const path = require('path');

module.exports = {

  development: {
    client: 'pg',
    connection: {
      host: 'localhost',
      dbPassword: config.dbPassword,
      user: 'eric',
      database: 'airbnb',
      port: 5432,
    },
    debug: true,
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      directory: path.join(__dirname, 'database/migrations'),
    },
    seeds: {
      directory: path.join(__dirname, 'database/seeds'),
    },
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user: 'username',
      password: 'password',
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: 'knex_migrations',
    },
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user: 'username',
      password: 'password',
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: 'knex_migrations',
    },
  },

};
