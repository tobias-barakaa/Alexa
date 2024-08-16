exports.up = function(knex) {
    return knex.schema.createTable('cvwriting_uploads', function(table) {
        table.increments('id').primary();
        table.string('file_url', 255).notNullable();
        table.string('public_id', 255).notNullable();
        table.integer('recipient_id').unsigned().notNullable();
        table.integer('uploaded_by').unsigned().notNullable();
        table.integer('resumes_id').unsigned().notNullable();  
        table.timestamp('created_at').defaultTo(knex.fn.now());

        // Foreign key constraints
        table.foreign('recipient_id').references('id').inTable('users').onDelete('CASCADE');
        table.foreign('uploaded_by').references('id').inTable('users').onDelete('CASCADE');
        table.foreign('resumes_id').references('id').inTable('resumes').onDelete('CASCADE');
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('cvwriting_uploads');
};
