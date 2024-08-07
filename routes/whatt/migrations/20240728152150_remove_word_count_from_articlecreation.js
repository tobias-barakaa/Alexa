exports.up = function(knex) {
    return knex.schema.table('articlecreation', function(table) {
      table.dropColumn('word_count');
    });
  };

  
  exports.down = function(knex) {
    return knex.schema.table('articlecreation', function(table) {
      table.integer('word_count').defaultTo(0); // Step 1: Add the column with a default value
    }).then(function() {
      return knex('articlecreation').update('word_count', 0); // Step 2: Update null values to the default value
    }).then(function() {
      return knex.schema.table('articlecreation', function(table) {
        table.integer('word_count').notNullable().alter(); // Step 3: Alter the column to NOT NULL
      });
    });
  };
  