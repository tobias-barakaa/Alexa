/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('categories').del()
    .then(function () {
      // Inserts seed entries
      return knex('categories').insert([
        { id: 1, name: 'Technology' },
        { id: 2, name: 'Lifestyle' },
        { id: 3, name: 'Business' },
        { id: 4, name: 'Health' },
        { id: 5, name: 'Education' },
        { id: 6, name: 'Other' }

      ]);
    });
};
