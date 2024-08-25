exports.up = function (knex) {
    return knex.schema.createTable('number_of_words', (table) => {
      table.increments('id').primary();
      table.string('name').notNullable();
      table.integer('word_count').notNullable();
    });
  };
  
  exports.down = function (knex) {
    return knex.schema.dropTableIfExists('number_of_words');
  };
  