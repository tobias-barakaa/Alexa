exports.up = function(knex) {
    return knex.schema.createTable('assignments', table => {
        table.string('id').primary().defaultTo(knex.raw('gen_random_uuid()'));
        table.string('article_id').references('id').inTable('articles').onDelete('CASCADE');
        table.string('writer_id').references('id').inTable('writers').onDelete('CASCADE');
        table.enu('status', ['assigned', 'completed']).defaultTo('assigned').notNullable();
        table.timestamps(true, true);
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('assignments');
};
