/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('status').del()
    .then(function () {
      // Inserts seed entries
      return knex('status').insert([
        { id: 1, name: 'Processing' },
        { id: 2, name: 'Pending' },
        { id: 3, name: 'Rejected' },
        { id: 4, name: 'Scheduled' },
        { id: 5, name: 'Completed' },
        { id: 6, name: 'Deleted' }
      ]);
    });
};
