exports.seed = function(knex) {
  return knex('resumes').del() // Deletes ALL existing entries
      .then(function() {
          return knex('resumes').insert([
              {
                  user_id: null, // Set to an existing user ID if needed
                  full_name: 'John Doe',
                  job_title: 'Software Engineer',
                  email: 'john.doe@example.com',
                  phone: '123-456-7890',
                  summary: 'Experienced software engineer with expertise in full-stack development.',
                  skills: 'JavaScript, React, Node.js',
                  languages: 'English, Spanish',
                  certifications: 'Certified JavaScript Developer',
                  achievements: 'Developed a high-traffic web application',
                  timeframe_id: knex.select('id').from('timeframe').where('duration', '1 week').first(),
                  cost: 100.00,
                  status_id: knex.select('id').from('status').where('name', 'Pending').first()
              }
          ]);
      });
};
