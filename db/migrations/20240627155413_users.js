exports.up = function(knex) {
    return knex.schema.createTable('users', table => {
        table.string('id').primary().defaultTo(knex.raw('gen_random_uuid()'));
        table.string('first_name').notNullable();
        table.string('last_name').notNullable();
        table.string('username').notNullable().unique();
        table.string('email').unique().notNullable();
        table.string('password').notNullable();
        table.string('profile_pic');
        table.enu('role', ['client']).notNullable().defaultTo('client');
        table.decimal('balance', 10, 2).defaultTo(0.00);
        table.timestamps(true, true);
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('users');
};
