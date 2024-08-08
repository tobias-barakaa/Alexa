exports.up = function(knex) {
    return knex.schema.createTable('resumes', table => {
        table.string('id').primary().defaultTo(knex.raw('gen_random_uuid()'));
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
        table.timestamps(true, true);
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('resumes');
};

table.integer('status_id').unsigned().notNullable().references('id').inTable('status').defaultTo(
    knex.raw('(SELECT id FROM status WHERE name = ?)', ['Pending'])
  );