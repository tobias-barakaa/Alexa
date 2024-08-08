exports.up = function(knex) {
    return knex.schema.createTable('timeframe', function(table) {
      table.increments('id').primary();
      table.string('duration').notNullable();
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('timeframe');
  };
  