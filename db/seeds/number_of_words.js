exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('number_of_words').del()
    .then(function () {
      // Inserts seed entries
      return knex('number_of_words').insert([
        { id: 1, name: '500 words', word_count: 300 },
        { id: 2, name: '500 words', word_count: 500 },
        { id: 3, name: '500 words', word_count: 800 },
        { id: 4, name: '1000 words', word_count: 1000 },
        { id: 5, name: '1500 words', word_count: 1500 },
        { id: 6, name: '1500 words', word_count: 2000 },
        { id: 7, name: '1500 words', word_count: 2500 },
        { id: 8, name: '1500 words', word_count: 3000 }

      ]);
    });
};
