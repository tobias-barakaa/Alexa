exports.up = function(knex) {
    return knex.schema.createTable('writers', table => {
        table.string('id').primary().defaultTo(knex.raw('gen_random_uuid()'));
        table.string('user_id').notNullable().references('id').inTable('users').onDelete('CASCADE');
        table.enu('status', ['pending', 'approved', 'rejected']).defaultTo('pending').notNullable();
        table.text('bio').notNullable();
        table.string('specializations').notNullable();
        table.integer('years_of_experience').notNullable();
        table.decimal('hourly_rate', 10, 2).notNullable();
        table.text('writing_samples').notNullable();
        table.string('contact').defaultTo('email').notNullable();
        table.string('cv_url'); 
        table.decimal('balance', 10, 2).defaultTo(0.00);
        table.timestamps(true, true);
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('writers');
};
