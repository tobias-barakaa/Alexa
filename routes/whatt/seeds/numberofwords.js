/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = function(knex) {
  return knex('numberofwords').del()
    .then(function () {
      return knex('numberofwords').insert([
        { id: 1, words: 250 },
        { id: 2, words: 500 },
        { id: 3, words: 750 },
        { id: 4, words: 1000 },
        { id: 5, words: 1500 },
        { id: 6, words: 2000 }
      ]);
    });
};