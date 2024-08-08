exports.up = function(knex) {
    return knex.schema.createTable('emailcopywriting', function(table) {
        table.increments('id').primary();
        table.integer('user_id').unsigned().references('id').inTable('users').onDelete('CASCADE');
        table.integer('project_type_id').unsigned().notNullable().references('id').inTable('project_types');
        table.text('project_description').notNullable();
        table.integer('timeframe_id').unsigned().notNullable().references('id').inTable('timeframe');
        table.integer('number_of_words_id').unsigned().notNullable().references('id').inTable('numberofwords');
        table.decimal('cost', 10, 2).notNullable();
        table.integer('status_id').unsigned().notNullable().references('id').inTable('status');
        table.timestamps(true, true);
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('emailcopywriting');
};
