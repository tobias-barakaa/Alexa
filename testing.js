const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
  host: "ep-quiet-mountain-a5anl9iv.us-east-2.aws.neon.tech",
  database: "Enwriter-writers",
  user: "writers-app_owner",
  password: "Dct0POI4SbjR",
  port: 5432,
  ssl: true, // Enable SSL; this is simpler and works in most cases
  connectionTimeoutMillis: 20000, // Adjust timeout if needed
});

async function testDatabaseConnection() {
  try {
    const client = await pool.connect();
    const res = await client.query('SELECT NOW()');
    console.log('Connected successfully. Current time:', res.rows[0].now);
    client.release();
  } catch (err) {
    console.error('Error executing query:', err.stack);
    console.error('Error code:', err.code);
  } finally {
    pool.end();
  }
}

testDatabaseConnection();
