exports.up = function(knex) {
    return knex.schema.createTable('upload_articles', function(table) {
        table.increments('id').primary();
        table.string('file_url', 255).notNullable();
        table.string('public_id', 255).notNullable();
        table.integer('recipient_id').unsigned().references('id').inTable('users').onDelete('CASCADE'); // Foreign key reference to users
        table.integer('uploaded_by').unsigned().references('id').inTable('users').onDelete('CASCADE');   // Foreign key reference to users
        table.integer('order_article_id').unsigned().references('id').inTable('order_articles').onDelete('CASCADE'); // Foreign key reference to order_articles
        table.timestamp('created_at').defaultTo(knex.fn.now()); // Timestamp
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('upload_articles');
};
