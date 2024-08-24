exports.up = function(knex) {
    return knex.schema.createTable('blogs', function(table) {
        table.increments('id').primary(); 
        table.string('title').notNullable();
        table.string('category').defaultTo('General'); 
        table.text('tags').defaultTo('').nullable();
        table.text('excerpt').defaultTo('').nullable();
        table.integer('word_count').unsigned().notNullable().defaultTo(300);
        table.string('duration').defaultTo('1 day');
        table.integer('user_id').unsigned().references('id').inTable('users').onDelete('CASCADE');
        table.string('language').defaultTo('American English');
        table.decimal('cost', 10, 2).notNullable().defaultTo(0.00);
        table.enu('status', ['Pending', 'Published', 'Completed', 'Processing', 'Deleted', 'Rejected']).defaultTo('Pending');
        table.timestamp('published_at').nullable();
        table.timestamps(true, true);
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('blogs');
};




