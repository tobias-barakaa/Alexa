exports.up = function(knex) {
    return knex.schema.createTable('submissions', table => {
        table.string('id').primary().defaultTo(knex.raw('gen_random_uuid()'));
        table.string('assignment_id').references('id').inTable('assignments').onDelete('CASCADE');
        table.text('submitted_content').notNullable(); // Content submitted by the writer
        table.enu('status', ['submitted', 'approved', 'rejected']).defaultTo('submitted').notNullable();
        table.timestamps(true, true);
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('submissions');
};
