exports.up = function (knex) {
    return knex.schema.createTable('timeframe', (table) => {
      table.increments('id').primary();
      table.string('name').notNullable();
      table.integer('days').notNullable();
    });
  };
  
  exports.down = function (knex) {
    return knex.schema.dropTableIfExists('timeframe');
  };
  