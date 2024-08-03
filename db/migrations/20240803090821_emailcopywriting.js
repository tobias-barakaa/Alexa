exports.up = function(knex) {
    return knex.schema.createTable('emailcopywriting', table => {
        table.string('id').primary().defaultTo(knex.raw('gen_random_uuid()'));
        table.string('user_id').references('id').inTable('users').onDelete('CASCADE');
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
