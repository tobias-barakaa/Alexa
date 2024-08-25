exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('categories').del()
    .then(function () {
      // Inserts seed entries
      return knex('categories').insert([
        { id: 1, name: 'General' },
        { id: 2, name: 'Technology' },
        { id: 3, name: 'Health' },
        { id: 4, name: 'Finance' },
        { id: 5, name: 'Education' },
        { id: 6, name: 'Lifestyle' },
        { id: 7, name: 'Travel' },
        { id: 8, name: 'Food' },
        { id: 9, name: 'Entertainment' },
        { id: 10, name: 'Business' },
        { id: 11, name: 'Science' },
        { id: 12, name: 'Sports' },
        { id: 13, name: 'Art' },
        { id: 14, name: 'Politics' },
        { id: 15, name: 'Culture' },
        { id: 16, name: 'Environment' },
        { id: 17, name: 'Other' },  
      ]);
    });
};
