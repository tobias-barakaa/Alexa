exports.up = function(knex) {
    return knex.schema.createTable('articlecreation', function(table) {
        table.increments('id').primary();
        table.string('title').notNullable();
        table.text('description').notNullable();
        table.integer('category_id').unsigned().notNullable().references('id').inTable('categories');
        table.text('Keywords').defaultTo('').nullable();
        table.string('complexity').notNullable();
        table.integer('number_of_words_id').unsigned().notNullable().references('id').inTable('numberofwords').defaultTo(
            knex.raw('(SELECT id FROM numberofwords WHERE words = ?)', [300]));
        table.integer('timeframe_id').unsigned().notNullable().references('id').inTable('timeframe').defaultTo(
            knex.raw('(SELECT id FROM timeframe WHERE duration = ?)', ['1 day']));
        table.integer('quantity_id').unsigned().notNullable().references('id').inTable('quantity').defaultTo(
            knex.raw('(SELECT id FROM quantity WHERE name = ?)', ['1'])
        )
        table.string('user_id').notNullable().references('id').inTable('users');
        table.decimal('cost', 10, 2).notNullable().defaultTo(0.00);
        table.integer('status_id').unsigned().notNullable().references('id').inTable('status').defaultTo(
          knex.raw('(SELECT id FROM status WHERE name = ?)', ['Pending'])
        );
        table.timestamps(true, true);
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('articlecreation');
  };