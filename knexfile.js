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

const knexConfig = {
  development: {
    client: 'pg',
    connection: {
      host: process.env.DB_HOST,
      database: process.env.DB_DATABASE,
      port: process.env.DB_PORT || 5432,
      user: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD
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
  host: "ep-quiet-mountain-a5anl9iv.us-east-2.aws.neon.tech",
  database: "Enwriter-writers",
  user: "writers-app_owner",
  password: "Dct0POI4SbjR",
  port: 5432,
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    },
    seeds: {
      directory: './db/seeds'
    }
  }
};


module.exports = knexConfig;


