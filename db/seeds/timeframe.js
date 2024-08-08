/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('timeframe').del()
    .then(function () {
      // Inserts seed entries
      return knex('timeframes').insert([
        { id: 1, duration: '12 Hours' },
        { id: 3, duration: '1 day' },
        { id: 3, duration: '2 days' },
        { id: 4, duration: '3 days' },
        { id: 5, duration: '1 week' },
        { id: 6, duration: '2 weeks' }
      ]);
    });
};
