// migrations/YYYYMMDDHHMMSS_create_duration_table.js

exports.up = function(knex) {
    return knex.schema.createTable('duration', function(table) {
      table.increments('id').primary();
      table.string('timeframe', 50).notNullable();
      table.text('description');
      table.timestamp('created_at').defaultTo(knex.fn.now());
      table.timestamp('updated_at').defaultTo(knex.fn.now());
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('duration');
  };