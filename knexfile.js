require("dotenv").config();
// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {

  staging: {
    client: 'pg',
    connection: {
      host: process.env.DB_HOST,
      database: process.env.DB_DATABASE,
      port: process.env.DB_PORT || 5432,
      user:     process.env.DB_USER,
      password: process.env.DB_PASSWORD
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  development: {
    client: 'pg',
    connection: {
      host: process.env.DB_HOST,
      database: process.env.DB_DATABASE,
      port: process.env.DB_PORT || 5432,
      user:     process.env.DB_USER,
      password: process.env.DB_PASSWORD
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    },

  production: {
    host: 'localhost',
    host: process.env.DB_HOST,
    database: process.env.DB_DATABASE,
    port: process.env.DB_PORT || 5432,
    user:     process.env.DB_USER,
    password: process.env.DB_PASSWORD
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
