exports.up = function(knex) {
    return knex.schema.createTable('uploads', function(table) {
      table.increments('id').primary();
      table.string('file_url', 255).notNullable();
      table.string('public_id', 255).notNullable();
      table.integer('recipient_id').unsigned().notNullable();
      table.integer('uploaded_by').unsigned().notNullable();
      table.integer('blog_id').unsigned().notNullable();
      table.timestamp('created_at').defaultTo(knex.fn.now());
  
      table.foreign('recipient_id').references('id').inTable('users');
      table.foreign('uploaded_by').references('id').inTable('users');
      table.foreign('blog_id').references('id').inTable('blogs');
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('file_uploads');
  };