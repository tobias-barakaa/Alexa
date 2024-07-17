exports.up = function(knex) {
    return knex.schema.table('articles', table => {
      // Drop the 'content' column
      table.dropColumn('content');
  
      // Drop the 'type' column
      table.dropColumn('type');
  
      // Drop the 'client_id' column
      table.dropColumn('client_id');
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.table('articles', table => {
      // Add back the 'content' column
      table.text('content').defaultTo('');
  
      // Add back the 'type' column
      table.enu('type', [
        'ai_written', 'manually_written', 'collaboratively_written'
      ]).notNullable();
  
      // Add back the 'client_id' column
      table.string('client_id').references('id').inTable('users').onDelete('CASCADE');
    });
  };
  



  /**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  
  await knex('roles').del();
  await knex('roles').insert([
    {id: 1, name: 'client'},
    {id: 2, name: 'admin'},
    {id: 3, name: 'writers'}
  ]);
};
