// seeds/initial_durations.js

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('duration').del()
    .then(function () {
      // Inserts seed entries
      return knex('duration').insert([
        {timeframe: '12 Hrs', description: 'Half a day'},
        {timeframe: '1 day', description: 'One day duration'},
        {timeframe: '2 days', description: 'Two days duration'},
        {timeframe: '3 days', description: 'Three days duration'},
        {timeframe: '1 week', description: 'One week duration'},
        {timeframe: '2 weeks', description: 'Two weeks duration'},
        {timeframe: '1 month', description: 'One month duration'},
      ]);
    });
};