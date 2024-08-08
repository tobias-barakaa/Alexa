exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('blogs').del()
      .then(function() {
          // Insert seed entries
          return knex('blogs').insert([{
              title: 'Sample Blog',
              category_id: 1, // Ensure this ID exists in the 'categories' table
              tags: 'example',
              excerpt: 'This is an example excerpt.',
              number_of_words_id: knex.select('id').from('numberofwords').where('words', 300).first(),
              timeframe_id: knex.select('id').from('timeframe').where('duration', '1 day').first(),
              language_id: knex.select('id').from('languages').where('name', 'American English').first(),
              status_id: knex.select('id').from('status').where('name', 'Pending').first(),
              cost: 0.00
          }]);
      });
};
