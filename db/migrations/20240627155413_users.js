exports.up = function(knex) {
    return knex.schema.createTable('users', table => {
        table.string('id').primary().defaultTo(knex.raw('gen_random_uuid()'));
        table.string('name').notNullable();
        table.string('email').unique().notNullable();
        table.string('password').notNullable();
        table.enu('role', ['client', 'writer', 'admin']).notNullable();
        table.timestamps(true, true);
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('users');
};
