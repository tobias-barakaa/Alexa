/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries in the 'roles' table
  await knex('roles').del();
  
  // Inserts seed entries into the 'roles' table
  await knex('roles').insert([
    {id: 1, name: 'client'},
    {id: 2, name: 'admin'}
  ]);
};
