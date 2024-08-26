// require("dotenv").config();

// module.exports = {
//   development: {
//     client: 'pg',
//     connection: {
//       host: process.env.DB_HOST,
//       database: process.env.DB_DATABASE,
//       port: process.env.DB_PORT || 5432,
//       user: process.env.DB_USERNAME,
//       password: process.env.DB_PASSWORD
//     },
//     pool: {
//       min: 2,
//       max: 10
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
//       host: process.env.DB_HOST,
//       database: process.env.DB_DATABASE,
//       port: process.env.DB_PORT || 5432,
//       user: process.env.DB_USER,
//       password: process.env.DB_PASSWORD
//     },
//     pool: {
//       min: 2,
//       max: 10
//     },
//     migrations: {
//       tableName: 'knex_migrations'
//     },
//     seeds: {
//       directory: './db/seeds'
//     }
//   }
// };





// require('dotenv').config();

// const path = require('path');

// const knexConfig = {

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
//   }
// };


require("dotenv").config();
const { RetryAgent } = require('undici');

const knexConfig = {
  development: {
    client: 'pg',
    connection: {
      

      host: process.env.DB_HOST,
      database: process.env.DB_DATABASE,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      port: process.env.DB_PORT || 5432,




      ssl: {
        rejectUnauthorized: false,
      },
      agent: {
        http: new RetryAgent({
          connect: {
            timeout: 10000, // 10 seconds
          },
          retries: 3, // Number of retry attempts
          retryDelay: 1000 // Wait time before retrying (1 second)
        }),
      }
    },
    pool: {
      min: 2,
      max: 10
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
      host: process.env.DB_HOST,
      database: process.env.DB_DATABASE,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      port: process.env.DB_PORT || 5432,
      ssl: {
        rejectUnauthorized: false,
      },
      agent: {
        http: new RetryAgent({
          connect: {
            timeout: 20000, // 20 seconds
          },
          retries: 5, // Number of retry attempts in production
          retryDelay: 2000 // Wait time before retrying (2 seconds)
        }),
      }
    },
    pool: {
      max: 100,
      min: 0,
      acquire: 1000000,
      idle: 100000,
      evict: 2000,
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

module.exports = knexConfig;

  


