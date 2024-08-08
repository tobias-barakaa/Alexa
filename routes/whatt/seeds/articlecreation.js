exports.seed = async function(knex) {
  // Fetch required IDs
  const category = await knex('categories').where('name', 'General').first();
  const language = await knex('languages').where('name', 'American English').first();
  const numberOfWords = await knex('numberofwords').where('words', 300).first();
  const timeframe = await knex('timeframe').where('duration', '1 day').first();
  const quantity = await knex('quantity').where('name', '1').first();
  const status = await knex('status').where('name', 'Pending').first();

  // Log the results for debugging
  console.log({ category, language, numberOfWords, timeframe, quantity, status });

  // Check if all required data is present
  if (!category || !language || !numberOfWords || !timeframe || !quantity || !status) {
    throw new Error('One or more required reference data not found');
  }

  // Deletes ALL existing entries
  await knex('articlecreation').del();

  // Inserts seed entries
  return knex('articlecreation').insert([
    {
      title: 'Sample Article Title',
      description: 'Sample description of the article.',
      category_id: category.id,
      Keywords: 'sample, keywords',
      complexity: 'High',
      number_of_words_id: numberOfWords.id,
      timeframe_id: timeframe.id,
      quantity_id: quantity.id,
      language_id: language.id,
      user_id: null, // Set this to a valid user ID if needed
      cost: 100.00,
      status_id: status.id
    }
  ]);
};


// -- Insert sample data into categories
// INSERT INTO categories (name) VALUES ('General');

// -- Insert sample data into languages
// INSERT INTO languages (name) VALUES ('American English');

// -- Insert sample data into numberofwords
// INSERT INTO numberofwords (words) VALUES (300);

// -- Insert sample data into timeframe
// INSERT INTO timeframe (duration) VALUES ('1 day');

// -- Insert sample data into quantity
// INSERT INTO quantity (name) VALUES ('1');

// -- Insert sample data into status
// INSERT INTO status (name) VALUES ('Pending');
