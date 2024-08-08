exports.up = function(knex) {
    return knex.schema.createTable('blogs', function(table) {
      table.increments('id').primary(); // Incrementing ID as primary key
      table.string('title').notNullable();
      table.integer('category_id').unsigned().notNullable().references('id').inTable('blogcategories');
      table.text('tags').defaultTo('').nullable();
      table.text('excerpt').defaultTo('').nullable();
      table.integer('number_of_words_id').unsigned().notNullable().references('id').inTable('numberofwords');
      table.integer('timeframe_id').unsigned().notNullable().references('id').inTable('timeframe');
      table.string('user_id').notNullable().references('id').inTable('users');
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
  