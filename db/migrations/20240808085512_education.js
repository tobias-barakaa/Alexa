exports.up = function(knex) {
    return knex.schema.createTable('education', table => {
        table.increments('id').primary();
        table.integer('resume_id').unsigned().references('id').inTable('resumes').onDelete('CASCADE');
        table.string('degree').notNullable();
        table.string('institution').notNullable();
        table.date('start_date').notNullable();
        table.date('end_date').notNullable();
        table.text('description');
        table.timestamps(true, true);
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('education');
};
