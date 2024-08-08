/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('languages').del()
    .then(function () {
      // Inserts seed entries
      return knex('languages').insert([
        { id: 1, name: 'American English' },
        { id: 2, name: 'British English' },
        { id: 3, name: 'Canadian English' },
        { id: 4, name: 'Australian English' }
      ]);
    });
};
