// Update with your config settings.
const path = require('path');


module.exports = {

  development: {
    client: 'pg',
    connection: {
      host: 'localhost',
      dbPassword: 'Hack2020@',
      user: 'eric',
      database: 'airbnb',
      port: 5432,
    },
    pool: {
      min: 2,
      max: 10,
    },
    migration: {
      directory: path.join(__dirname, 'database/migrations'),
    },
    seed: {
      directory: path.join(__dirname, 'database/seeds'),
    },
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
