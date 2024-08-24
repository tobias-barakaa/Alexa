// YYYYMMDDHHMMSS_seed_roles.js
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('roles').del()
    .then(function () {
      // Inserts seed entries
      return knex('roles').insert([
        {id: 1, name: 'client'},
        {id: 2, name: 'admin'},
        {id: 3, name: 'writer'}
      ]);
    });
};