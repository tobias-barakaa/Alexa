exports.up = function(knex) {
    return knex.schema.createTable('emailcopywriting', table => {
        table.increments('id').primary();
        table.integer('user_id').unsigned().references('id').inTable('users').onDelete('CASCADE');
        table.string('project_type').notNullable();
        table.text('project_description').notNullable();
        table.string('deadline').notNullable();
        table.integer('word_count').notNullable();
        table.decimal('cost', 10, 2).notNullable();
        table.string('status').defaultTo('pending');
        table.timestamps(true, true);
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('emailcopywriting');
};
