exports.up = function(knex) {
    return knex.schema.table('articlecreation', (table) => {
      // Drop the foreign key constraint first
      table.dropForeign('number_of_words_id');
      
      // Then drop the column
      table.dropColumn('number_of_words_id');
      
      // Ensure word_count exists (in case it was removed in a previous migration)
      if (!knex.schema.hasColumn('articlecreation', 'word_count')) {
        table.integer('word_count').notNullable();
      }
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.table('articlecreation', (table) => {
      // Add back the number_of_words_id column
      table.integer('number_of_words_id').unsigned().notNullable().references('id').inTable('numberofwords');
      
      // We don't drop word_count in the down migration because it existed in the original table
    });
  };