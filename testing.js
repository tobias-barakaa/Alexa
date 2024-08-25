const { Pool } = require('pg');
const { Agent } = require('https');
require('dotenv').config();

// Create an agent with keep-alive enabled
const keepAliveAgent = new Agent({
  keepAlive: true,
});

const pool = new Pool({
  host: "ep-quiet-mountain-a5anl9iv.us-east-2.aws.neon.tech",
  database: "Enwriter-writers",
  user: "writers-app_owner",
  password: "Dct0POI4SbjR",
  port: 5432,
  ssl: {
    rejectUnauthorized: false,
    agent: keepAliveAgent, // Use the keep-alive agent
  },
  connectionTimeoutMillis: 50000, // Adjust timeout if needed
});

pool.connect()
  .then(client => {
    return client.query('SELECT NOW()')
      .then(res => {
        console.log('Connected successfully. Current time:', res.rows[0].now);
        client.release();
      });
  })
  .catch(err => {
    console.error('Error executing query:', err.stack);
    console.error('Error code:', err.code);
    pool.end();
  });
