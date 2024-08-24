require('dotenv').config();

module.exports = {
  development: {
    client: 'pg',
    connection: process.env.DEV_DATABASE_URL,
    migrations: {
      directory: './db/migrations' // Directory for migration files
    },
    seeds: {
      directory: './db/seeds' 
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
      directory: './db/migrations'
    },
    seeds: {
      directory: './db/seeds'
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
      directory: './db/migrations'
    },
    seeds: {
      directory: './db/seeds'
    },
    pool: {
      min: 2,
      max: 20 // Increased max pool size for production
    },
    ssl: { rejectUnauthorized: false }
  }
};


// require("dotenv").config();

// module.exports = {
//   development: {
//     client: 'pg',
//     connection: process.env.DATABASE_URL,
//     pool: {
//       min: 1,
//       max: 5,
//       acquireTimeoutMillis: 60000,
//       createTimeoutMillis: 30000,
//       idleTimeoutMillis: 30000
//     },
//     migrations: {
//       tableName: 'knex_migrations',
//       directory: './db/migrations'
//     },
//     seeds: {
//       directory: './db/seeds'
//     }
//   },
//   production: {
//     client: 'pg',
//     connection: {
//       connectionString: process.env.DATABASE_URL,
//       ssl: { rejectUnauthorized: false }
//     },
//     pool: {
//       min: 1,
//       max: 5,
//       acquireTimeoutMillis: 60000,
//       createTimeoutMillis: 30000,
//       idleTimeoutMillis: 30000
//     },
//     migrations: {
//       tableName: 'knex_migrations',
//       directory: './db/migrations'
//     },
//     seeds: {
//       directory: './db/seeds'
//     }
//   }
// };

