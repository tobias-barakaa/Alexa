exports.up = function(knex) {
    return knex.schema.createTable('resumes', table => {
        table.increments('id').primary();
        table.integer('user_id').unsigned().references('id').inTable('users').onDelete('CASCADE');
        table.string('full_name').notNullable();
        table.string('job_title').notNullable();
        table.string('email').notNullable();
        table.string('phone').notNullable();
        table.text('summary');
        table.text('skills');
        table.text('languages').defaultTo('American English');
        table.text('certifications');
        table.enu('status', ['Pending', 'Published', 'Completed', 'Processing', 'Deleted', 'Rejected']).defaultTo('Pending');
        table.text('achievements');
        table.string('profile_pic').defaultTo('default_profile_pic.jpg'); 
        table.decimal('cost', 10, 2).defaultTo(0.00); 
        table.timestamps(true, true);
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('resumes');
};