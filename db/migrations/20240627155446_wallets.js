exports.up = function(knex) {
    return knex.schema.createTable('wallets', table => {
        table.string('id').primary().defaultTo(knex.raw('gen_random_uuid()'));
        table.string('user_id').references('id').inTable('users').onDelete('CASCADE');
        table.decimal('available_balance', 10, 2).defaultTo(0);
        table.decimal('pending_balance', 10, 2).defaultTo(0);
        table.decimal('total_balance', 10, 2).defaultTo(0);
        table.timestamps(true, true);
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('wallets');
};
