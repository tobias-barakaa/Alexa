exports.up = function(knex) {
    return knex.schema.createTable('writers', table => {
        table.string('id').primary().defaultTo(knex.raw('gen_random_uuid()'));
        table.string('user_id').references('id').inTable('users').onDelete('CASCADE');
        table.text('bio').defaultTo("no bio provided yet");
        table.string('profile_pic').defaultTo('https://avatar.iran.liara.run/username?username=default');
        table.string('specializations').defaultTo("not provided yet");
        table.integer('years_of_experience').defaultTo(4);
        table.text('samples').defaultTo("not provided yet");
        table.string('contact').defaultTo('not provided yet');
        table.decimal('balance', 10, 2).defaultTo(0.00);
        table.boolean('available').defaultTo(false); 
        table.timestamp('last_available_update');
        table.enu('status', ['pending', 'approved', 'rejected']).defaultTo('pending').notNullable();
        table.timestamps(true, true);
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('writers');
};
