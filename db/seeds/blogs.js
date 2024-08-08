/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = function(knex) {
    // Deletes ALL existing entries
    return knex('blogs').del()
      .then(function () {
        // Inserts seed entries
        return knex('blogs').insert([
          { id: 1, title: 'First Blog Post', content: 'Content for the first blog post', category_id: 1, created_at: new Date(), updated_at: new Date() },
          { id: 2, title: 'Second Blog Post', content: 'Content for the second blog post', category_id: 2, created_at: new Date(), updated_at: new Date() },
          // Add more entries as needed
        ]);
      });
  };
  