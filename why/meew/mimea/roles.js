exports.seed = function(knex) {
  return knex('roles').del()
    .then(function () {
      return knex('roles').insert([
        { id: 1, name: 'client' },
        { id: 2, name: 'admin' },
        { id: 3, name: 'writer' }
      ]);
    });
};
