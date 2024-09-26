exports.up = function(knex) {
    return knex.schema.createTable('article_upload', function(table) {
        table.increments('id').primary();
        table.string('file_url', 255).notNullable();
        table.string('public_id', 255).notNullable();
        table.integer('recipient_id').unsigned().notNullable();
        table.integer('uploaded_by').unsigned().notNullable();
        table.integer('article_id').unsigned().notNullable(); 
        table.string('status').notNullable().defaultTo('Processing');
        table.foreign('recipient_id').references('id').inTable('users').onDelete('CASCADE');
        table.foreign('uploaded_by').references('id').inTable('users').onDelete('CASCADE');
        table.foreign('article_id').references('id').inTable('create').onDelete('CASCADE');
        table.timestamp('created_at').defaultTo(knex.fn.now());
        table.timestamp('updated_at').defaultTo(knex.fn.now()); 


    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('article_upload');
};

