exports.up = function(knex) {
    return knex.schema.createTable('blog_upload', function(table) {
        table.increments('id').primary();
        table.string('cloudinary_url').notNullable();
        table.string('public_id').notNullable();
        table.string('filename').notNullable();
        
        // Foreign key references
        table.integer('blog_id').unsigned().notNullable().references('id').inTable('blogs').onDelete('CASCADE');
        table.integer('user_id').unsigned().notNullable().references('id').inTable('users').onDelete('CASCADE');
        
        table.timestamps(true, true);
    });
};
  
exports.down = function(knex) {
    return knex.schema.dropTable('blog_upload');
};