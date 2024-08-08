exports.up = function(knex) {
    return knex.schema.createTable('work_experience', table => {
        table.increments('id').primary();
        table.integer('resume_id').unsigned().references('id').inTable('resumes').onDelete('CASCADE');
        table.string('job_title').notNullable();
        table.string('company').notNullable();
        table.date('start_date').notNullable();
        table.date('end_date').notNullable();
        table.text('responsibilities');
        table.timestamps(true, true);
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('work_experience');
};
