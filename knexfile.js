const path = require('path');
require('dotenv').config();

module.exports = {
  development: {
    client: 'pg',
    connection: process.env.DEV_DATABASE_URL,
    migrations: {
      directory: path.join(__dirname, 'db', 'migrations')
    },
    seeds: {
      directory: path.join(__dirname, 'db', 'seeds')
    },
    pool: {
      min: 2,
      max: 10
    },
    ssl: { rejectUnauthorized: false }
  },
  test: {
    client: 'pg',
    connection: process.env.TEST_DATABASE_URL,
    migrations: {
      directory: path.join(__dirname, 'db', 'migrations')
    },
    seeds: {
      directory: path.join(__dirname, 'db', 'seeds')
    },
    pool: {
      min: 2,
      max: 10
    },
    ssl: { rejectUnauthorized: false }
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
    migrations: {
      directory: path.join(__dirname, 'db', 'migrations')
    },
    seeds: {
      directory: path.join(__dirname, 'db', 'seeds')
    },
    pool: {
      min: 2,
      max: 20
    },
    ssl: { rejectUnauthorized: false }
  }
};
