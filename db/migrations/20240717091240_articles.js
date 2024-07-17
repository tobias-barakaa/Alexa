exports.up = function(knex) {
    return knex.schema.createTable('articles', table => {
        table.string('id').primary().defaultTo(knex.raw('gen_random_uuid()'));
        table.string('user_id').references('id').inTable('users').onDelete('CASCADE');
        table.text('description').notNullable();
        table.string('category').notNullable();
        table.string('number_of_words').notNullable();
        table.integer('quantity').notNullable();
        table.string('keywords').notNullable();
        table.string('author_tone').notNullable();
        table.string('status').defaultTo('pending').notNullable();
        table.string('language').notNullable();
        table.string('writer_id').references('id').inTable('writers').onDelete('SET NULL'); // Writer assigned to the article
        table.string('duration').notNullable();
        table.decimal('cost', 10, 2).notNullable();
        table.timestamps(true, true);
    })
    .then(() => knex.raw('ALTER TABLE articles ADD CONSTRAINT quantity_check CHECK (quantity BETWEEN 1 AND 10)'));
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('articles');
  };
  