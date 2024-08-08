exports.up = function(knex) {
    return knex.schema.createTable('resumes', table => {
        table.increments('id').primary();
        table.string('user_id').references('id').inTable('users').onDelete('CASCADE');
        table.string('full_name').notNullable();
        table.string('job_title').notNullable();
        table.string('email').notNullable();
        table.string('phone').notNullable();
        table.text('summary');
        table.text('skills');
        table.text('languages');
        table.text('certifications');
        table.text('achievements');
        table.integer('timeframe_id').unsigned().notNullable().references('id').inTable('timeframe');
        table.string('user_id').notNullable().references('id').inTable('users');
        table.decimal('cost', 10, 2).notNullable().defaultTo(0.00);
        table.integer('status_id').unsigned().notNullable().references('id').inTable('status').defaultTo(
            knex.raw('(SELECT id FROM status WHERE name = ?)', ['Pending'])
          );
        table.timestamps(true, true);
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('resumes');
};

