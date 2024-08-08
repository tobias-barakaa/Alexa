exports.up = function(knex) {
    return knex.schema.createTable('blogs', function(table) {
      table.increments('id').primary(); 
      table.string('title').notNullable();
      table.integer('category_id').unsigned().notNullable().references('id').inTable('categories');
      table.text('tags').defaultTo('').nullable();
      table.text('excerpt').defaultTo('').nullable();
      table.integer('number_of_words_id').unsigned().notNullable().references('id').inTable('numberofwords').defaultTo(
        knex.raw('(SELECT id FROM numberofwords WHERE words = ?)', [300]));
      table.integer('timeframe_id').unsigned().notNullable().references('id').inTable('timeframe').defaultTo(
        knex.raw('(SELECT id FROM timeframe WHERE duration = ?)', ['1 day']));
        table.integer('user_id').unsigned().references('id').inTable('users').onDelete('CASCADE');
      table.integer('language_id').unsigned().notNullable().references('id').inTable('languages').defaultTo(
          knex.raw('(SELECT id FROM languages WHERE name = ?)', ['American English'])
        );
      table.decimal('cost', 10, 2).notNullable().defaultTo(0.00);
      table.integer('status_id').unsigned().notNullable().references('id').inTable('status').defaultTo(
        knex.raw('(SELECT id FROM status WHERE name = ?)', ['Pending'])
      );
      table.timestamp('published_at').nullable();
      table.timestamps(true, true);
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('blogs');
  };
  