/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = function(knex) {
  return knex('timeframe').del()
    .then(function () {
      return knex('timeframe').insert([
        { id: 1, duration: '3 hours' },
        { id: 2, duration: '12 hours' },
        { id: 3, duration: '1 day' },
        { id: 4, duration: '2 days' },
        { id: 5, duration: '3 days' },
        { id: 6, duration: '1 week' },
        { id: 7, duration: '2 weeks' }
      ]);
    });
};