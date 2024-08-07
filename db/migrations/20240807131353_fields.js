exports.up = function(knex) {
    return knex.schema.createTable('fields', function(table) {
      table.increments('id').primary(); // Primary key
      table.string('cloudinary_url').notNullable(); // URL to the file in Cloudinary
      table.string('public_id').notNullable(); // Public ID of the file in Cloudinary
      table.string('filename').notNullable(); // Original filename
      table.uuid('user_id').notNullable(); // ID of the user who uploaded the file
      table.uuid('blog_id').notNullable(); // ID of the associated blog
      table.timestamps(true, true); // Created at and updated at timestamps
  
      // Define foreign key constraints
      table.foreign('user_id').references('id').inTable('users').onDelete('CASCADE');
      table.foreign('blog_id').references('id').inTable('blogs').onDelete('CASCADE');
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('fields');
  };
  