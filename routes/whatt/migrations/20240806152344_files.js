// In your migrations folder, create a new file like YYYYMMDDHHMMSS_create_files_table.js

exports.up = function(knex) {
    return knex.schema.createTable('files', function(table) {
      table.increments('id').primary();
      table.string('cloudinary_url').notNullable();
      table.string('public_id').notNullable();
      table.string('filename').notNullable();
      table.timestamps(true, true);
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('files');
  };


  