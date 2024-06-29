exports.up = function(knex) {
    return knex.schema.createTable('samples', table => {
        table.string('id').primary().defaultTo(knex.raw('gen_random_uuid()'));
        table.string('type').notNullable();
        table.text('content').notNullable();
        table.timestamps(true, true); 
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('samples');
};
