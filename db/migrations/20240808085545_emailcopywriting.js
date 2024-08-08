exports.up = function(knex) {
    return knex.schema.createTable('emailcopywriting', table => {
        table.increments('id').primary();
        table.string('user_id').notNullable().references('id').inTable('users');
        table.string('project_type').notNullable();
        table.text('project_description').notNullable();
        table.integer('timeframe_id').unsigned().notNullable().references('id').inTable('timeframe').defaultTo(
            knex.raw('(SELECT id FROM timeframe WHERE duration = ?)', ['1 day']));
        table.integer('number_of_words_id').unsigned().notNullable().references('id').inTable('numberofwords').defaultTo(
            knex.raw('(SELECT id FROM numberofwords WHERE words = ?)', [300]));
        table.decimal('cost', 10, 2).notNullable();
        table.integer('status_id').unsigned().notNullable().references('id').inTable('status').defaultTo(
            knex.raw('(SELECT id FROM status WHERE name = ?)', ['Pending']));
        table.timestamps(true, true);
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('emailcopywriting');
};
