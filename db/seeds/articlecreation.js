exports.seed = function(knex) {
  return knex('articlecreation').del() // Deletes ALL existing entries
      .then(function() {
          return knex('articlecreation').insert([
              {
                  title: 'Sample Article',
                  description: 'This is a sample article description.',
                  category_id: knex.select('id').from('categories').where('name', 'General').first(),
                  Keywords: 'example',
                  complexity: 'Medium',
                  number_of_words_id: knex.select('id').from('numberofwords').where('words', 300).first(),
                  timeframe_id: knex.select('id').from('timeframe').where('duration', '1 day').first(),
                  quantity_id: knex.select('id').from('quantity').where('name', '1').first(),
                  language_id: knex.select('id').from('languages').where('name', 'American English').first(),
                  user_id: null, // Set to an existing user ID if required
                  cost: 0.00,
                  status_id: knex.select('id').from('status').where('name', 'Pending').first()
              }
          ]);
      });
};
