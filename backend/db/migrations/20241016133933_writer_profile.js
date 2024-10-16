exports.up = function(knex) {
    return knex.schema.createTable('writer_profile', (table) => {
      table.increments('id').primary();
      table.integer('user_id').unsigned().notNullable(); 
      table.foreign('user_id').references('id').inTable('users').onDelete('CASCADE');
      table.text('bio').defaultTo('no bio provided yet').notNullable(); 
      table.string('profile_pic').defaultTo('https://avatar.iran.liara.run/username?username=default'); 
      table.text('specializations').defaultTo('not provided yet').notNullable(); 
      table.integer('years_of_experience').defaultTo(4); 
      table.text('samples').defaultTo('not provided yet'); 
      table.string('contact').defaultTo('not provided yet'); 
      table.float('balance').defaultTo(0.00);
      table.boolean('available').defaultTo(false); 
      table.string('status').defaultTo('Pending'); 
  
      // New additions
      table.float('rate_per_word').nullable(); 
      table.float('rate_per_project').nullable();
      table.string('experience_level').defaultTo('Beginner'); 
      table.string('languages').defaultTo('English'); 
      table.text('certifications').defaultTo('none'); 
  
      // Optional fields
      table.float('rating').defaultTo(0); 
      table.integer('total_jobs_completed').defaultTo(0); 
      table.json('social_media_links').nullable(); 
      table.string('file_url', 255).nullable().defaultTo('');

      table.text('portfolio_link').nullable(); 
      table.text('skills').nullable(); 
      table.text('location').nullable();
      table.string('timezone').nullable();
      table.boolean('verified').defaultTo(false); 
      table.timestamp('last_active').nullable(); 
  
      table.timestamp('created_at').defaultTo(knex.fn.now()); 
      table.timestamp('updated_at').defaultTo(knex.fn.now()); 
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTableIfExists('writer_profile');
  };
  