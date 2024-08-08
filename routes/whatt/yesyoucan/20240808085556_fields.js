exports.up = function(knex) {
    return knex.schema.createTable('fields', function(table) {
      table.increments('id').primary();
      table.string('cloudinary_url').notNullable();
      table.string('public_id').notNullable();
      table.string('filename').notNullable();
      
      // Foreign key references
      table.integer('blog_id').unsigned().notNullable().references('id').inTable('blogs').onDelete('CASCADE'); // Corrected this line
      table.integer('user_id').unsigned().references('id').inTable('users').onDelete('CASCADE');
      
      table.timestamps(true, true);
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('fields');
  };
  