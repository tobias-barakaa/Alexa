// const knex = require('knex');
// const knexFile = require('../knexfile.js');

// const environment = process.env.NODE_ENV || 'development';
// const config = knexFile[environment];

// module.exports = knex(config);


const knex = require('knex');
const knexConfig = require('../knexfile'); // Adjust the path as needed
const environment = process.env.NODE_ENV || 'development';
const config = knexConfig[environment];

const db = knex(config);

module.exports = db;



// const knex = require('knex');
// const knexFile = require("../knexfile.js");

// const environment = process.env.NODE_ENV || "development";

// module.exports = knex(knexFile[environment]);