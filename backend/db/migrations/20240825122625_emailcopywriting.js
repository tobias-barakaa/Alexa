exports.up = function(knex) {
    return knex.schema.createTable('emailcopywriting', table => {
        table.increments('id').primary();
        table.integer('user_id').unsigned().references('id').inTable('users').onDelete('CASCADE');
        table.string('project_type').notNullable();
        table.text('project_description').notNullable();
        table.string('duration', 255).defaultTo('1 day');
        table.integer('word_count').unsigned().notNullable().defaultTo(300);
        table.decimal('cost', 10, 2).notNullable().defaultTo(0.00);
        table.enu('status', ['Pending', 'Published', 'Completed', 'Processing', 'Deleted', 'Rejected']).defaultTo('Pending');
        table.timestamps(true, true);
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('emailcopywriting');
};
