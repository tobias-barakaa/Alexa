// migrations/xxxx_create_articles_table.js
exports.up = function(knex) {
    return knex.schema.createTable('articlecreation', (table) => {
      table.increments('id').primary();
      table.integer('user_id').references('id').inTable('users').notNullable().onDelete('CASCADE');
      table.string('title').notNullable();
      table.text('description').notNullable();
      table.text('keywords');
      table.integer('word_count').notNullable();
      table.string('tone_style').notNullable().defaultTo('formal');
      table.text('links').notNullable().defaultTo('');
      table.string('complexity').notNullable();
      table.decimal('cost', 10, 2).notNullable();
      table.enu('status', ['pending', 'processing', 'completed']).notNullable().defaultTo('pending'); // Enum type for status
      table.integer('number_of_words_id').unsigned().notNullable().references('id').inTable('numberofwords');
      table.integer('timeframe_id').unsigned().notNullable().references('id').inTable('timeframe');
      table.timestamps(true, true);
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTableIfExists('articlecreation');
  };
  