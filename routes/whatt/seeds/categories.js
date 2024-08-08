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
        { id: 1, name: 'General' },
        { id: 2, name: 'Formal' },
        { id: 3, name: 'Technology' },
        { id: 4, name: 'Lifestyle' },
        { id: 5, name: 'Business' },
        { id: 6, name: 'Health' },
        { id: 7, name: 'Education' },
        { id: 8, name: 'Other' }

      ]);
    });
};
