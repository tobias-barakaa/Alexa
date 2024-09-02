exports.up = function(knex) {
    return knex.schema.createTable('email_copywriting_uploads', function(table) {
        table.increments('id').primary();
        table.string('file_url', 255).notNullable();
        table.string('public_id', 255).notNullable();
        table.integer('recipient_id').unsigned().notNullable();
        table.integer('uploaded_by').unsigned().notNullable();
        table.integer('email_copywriting_id').unsigned().notNullable();  
        table.timestamp('created_at').defaultTo(knex.fn.now());

        // Foreign key constraints
        table.foreign('recipient_id').references('id').inTable('users').onDelete('CASCADE');
        table.foreign('uploaded_by').references('id').inTable('users').onDelete('CASCADE');
        table.foreign('email_copywriting_id').references('id').inTable('emailcopywriting').onDelete('CASCADE');
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('email_copywriting_uploads');
};
