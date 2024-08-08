/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  // Update existing rows with default values
  return knex('blogs').whereNull('number_of_words_id').update({
    number_of_words_id: knex.raw('(SELECT id FROM numberofwords WHERE words = ? LIMIT 1)', [300])
  }).then(() => {
    return knex('blogs').whereNull('timeframe_id').update({
      timeframe_id: knex.raw('(SELECT id FROM timeframe WHERE duration = ? LIMIT 1)', ['1 day'])
    });
  }).then(() => {
    return knex('blogs').whereNull('language_id').update({
      language_id: knex.raw('(SELECT id FROM languages WHERE name = ? LIMIT 1)', ['American English'])
    });
  }).then(() => {
    return knex('blogs').whereNull('status_id').update({
      status_id: knex.raw('(SELECT id FROM status WHERE name = ? LIMIT 1)', ['Pending'])
    });
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  // No rollback logic for this example
};
