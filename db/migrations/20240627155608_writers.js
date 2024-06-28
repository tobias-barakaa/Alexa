exports.up = function(knex) {
    return knex.schema.createTable('writers', table => {
        table.string('id').primary().defaultTo(knex.raw('gen_random_uuid()'));
        table.string('name').notNullable();
        table.string('email').unique().notNullable();
        table.string('password').notNullable();
        table.text('bio');
        table.string('profile_pic_url');
        table.decimal('balance', 10, 2).defaultTo(0.00); // Writer's account balance
        table.timestamps(true, true);
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('writers');
};
