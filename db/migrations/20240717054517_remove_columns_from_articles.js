exports.up = function(knex) {
  return knex.schema.table('articles', table => {
    // Drop the 'content' column
    table.dropColumn('content');
    
    // Drop the 'type' column
    table.dropColumn('type');
    table.dropColumn('client_id');
    
    // If you've removed any other columns, drop them here as well
  });
};

exports.down = function(knex) {
  return knex.schema.table('articles', table => {
    // Add back the 'content' column
    table.text('content').defaultTo('');
    table.text('content').defaultTo('');
    table.string('client_id').references('id').inTable('users').onDelete('CASCADE');

    
    // Add back the 'type' column
    
    
    // If you've removed any other columns, add them back here
  });
};