/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = function(knex) {
  return knex('blogcategories').del()
    .then(function () {
      return knex('blogcategories').insert([
        { id: 1, name: 'Technology' },
        { id: 2, name: 'Lifestyle' },
        { id: 3, name: 'Business' },
        { id: 4, name: 'Health' },
        { id: 5, name: 'Education' }
      ]);
    });
};