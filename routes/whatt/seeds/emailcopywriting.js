exports.seed = async function(knex) {
  const projectType = await knex('project_types').where('name', 'Email Copywriting').first();
  const timeframe = await knex('timeframe').where('duration', '1 day').first();
  const numberOfWords = await knex('numberofwords').where('words', 300).first();
  const status = await knex('status').where('name', 'Pending').first();

  // Deletes ALL existing entries
  await knex('emailcopywriting').del();

  // Inserts seed entries
  return knex('emailcopywriting').insert([
    {
      user_id: null, // Set this to a valid user ID if needed
      project_type_id: projectType ? projectType.id : null,
      project_description: 'Write a compelling email copy for the new product launch.',
      timeframe_id: timeframe ? timeframe.id : null,
      number_of_words_id: numberOfWords ? numberOfWords.id : null,
      cost: 100.00,
      status_id: status ? status.id : null
    }
  ]);
};
