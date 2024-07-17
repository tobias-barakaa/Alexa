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