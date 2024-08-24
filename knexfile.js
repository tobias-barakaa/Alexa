require("dotenv").config();

module.exports = {
  development: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
    pool: {
      min: 1,
      max: 5,
      acquireTimeoutMillis: 60000,
      createTimeoutMillis: 30000,
      idleTimeoutMillis: 30000
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: './db/migrations'
    },
    seeds: {
      directory: './db/seeds'
    }
  },
  production: {
    client: 'pg',
    connection: {
      connectionString: process.env.DATABASE_URL,
      ssl: { rejectUnauthorized: false }
    },
    pool: {
      min: 1,
      max: 5,
      acquireTimeoutMillis: 60000,
      createTimeoutMillis: 30000,
      idleTimeoutMillis: 30000
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: './db/migrations'
    },
    seeds: {
      directory: './db/seeds'
    }
  }
};
