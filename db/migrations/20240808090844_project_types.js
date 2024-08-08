exports.up = function(knex) {
    return knex.schema.createTable('project_types', function(table) {
      table.increments('id').primary();
      table.string('name').notNullable().unique();
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('project_types');
  };
  