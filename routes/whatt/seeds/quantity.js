/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('quantity').del()
    .then(function () {
      // Inserts seed entries
      return knex('quantity').insert([
        { id: 1, name: '1' },
        { id: 2, name: '2' },
        { id: 3, name: '3' },
        { id: 4, name: '4' },
        { id: 5, name: '5' },
        { id: 6, name: '6' },
        { id: 7, name: '7' },
        { id: 8, name: '8' },
        { id: 9, name: '9' },
        { id: 10, name: '10' }
      ]);
    });
};
