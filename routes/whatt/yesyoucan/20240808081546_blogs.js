exports.up = function(knex) {
    return knex.schema.createTable('blogs', function(table) {
        table.increments('id').primary(); 
        table.string('title').notNullable();
        table.integer('category_id').unsigned().notNullable().references('id').inTable('categories');
        table.text('tags').defaultTo('').nullable();
        table.text('excerpt').defaultTo('').nullable();
        table.integer('number_of_words_id').unsigned().notNullable().references('id').inTable('numberofwords');
        table.integer('timeframe_id').unsigned().notNullable().references('id').inTable('timeframe');
        table.integer('user_id').unsigned().references('id').inTable('users').onDelete('CASCADE');
        table.integer('language_id').unsigned().notNullable().references('id').inTable('languages');
        table.decimal('cost', 10, 2).notNullable().defaultTo(0.00);
        table.integer('status_id').unsigned().notNullable().references('id').inTable('status');
        table.timestamp('published_at').nullable();
        table.timestamps(true, true);
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('blogs');
};
