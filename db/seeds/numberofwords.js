/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('numberofwords').del()
    .then(function () {
      // Inserts seed entries
      return knex('numberofwords').insert([
        { id: 1, words: 300 },
        { id: 2, words: 500 },
        { id: 3, words: 1000 },
        { id: 4, words: 1500 },
        { id: 5, words: 2000 },
        { id: 6, words: 2500 }
      ]);
    });
};
