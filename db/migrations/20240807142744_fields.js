exports.up = function(knex) {
    return knex.schema.createTable('fields', function(table) {
      table.increments('id').primary();
      table.string('cloudinary_url').notNullable();
      table.string('public_id').notNullable();
      table.string('filename').notNullable();
      table.uuid('user_id').notNullable();
      table.uuid('blog_id');
      table.timestamps(true, true);
    })
    .then(function() {
      return knex.schema.alterTable('fields', function(table) {
        table.foreign('user_id').references('id').inTable('users').onDelete('CASCADE');
        table.foreign('blog_id').references('id').inTable('blogs').onDelete('CASCADE');
      });
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('fields');
  };