exports.up = function(knex) {
    return knex.schema.createTable('articlecreation', function(table) {
        table.increments('id').primary();
        table.string('title', 255).notNullable();
        table.text('description').notNullable();
        table.string('category', 255).defaultTo('General'); 
        table.text('keywords').defaultTo('').nullable(); 
        table.string('complexity', 100).notNullable().defaultTo('Basic'); 
        table.integer('word_count').unsigned().notNullable().defaultTo(300);
        table.string('duration', 255).defaultTo('1 day');
        table.integer('quantity').unsigned().notNullable().defaultTo(1);
        table.string('language', 255).defaultTo('American English');                  
        table.integer('user_id').unsigned().references('id').inTable('users').onDelete('CASCADE');
        table.decimal('cost', 10, 2).notNullable().defaultTo(0.00);
        table.enu('status', ['Pending', 'Published', 'Completed', 'Processing', 'Deleted', 'Rejected']).defaultTo('Pending');
        table.timestamps(true, true);
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('articlecreation');
};
