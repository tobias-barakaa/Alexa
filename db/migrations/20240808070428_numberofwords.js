exports.up = function(knex) {
    return knex.schema.createTable('numberofwords', function(table) {
      table.increments('id').primary();
      table.integer('words').notNullable();
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('numberofwords');
  };
  