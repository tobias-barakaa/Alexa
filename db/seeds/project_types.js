// Seed script to insert default project types
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('project_types').del()
      .then(function () {
          // Inserts seed entries
          return knex('project_types').insert([
              { id: 1, name: 'General' },
              { id: 2, name: 'Promotional' },
              { id: 3, name: 'Transactional' },
              { id: 4, name: 'Newsletter' },
              { id: 5, name: 'Follow-up' },
              { id: 6, name: 'Drip Campaign' },
              { id: 7, name: 'Social Media Content' },
              { id: 8, name: 'Website Copy' },
              { id: 9, name: 'Blog Posts' },
              { id: 10, name: 'Email Campaigns' },
              { id: 11, name: 'Ad Copy' },
              { id: 12, name: 'Other' }
          ]);
      });
};
