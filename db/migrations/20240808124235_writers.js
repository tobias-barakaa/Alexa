
exports.up = function(knex) {
    return knex.schema.createTable('writers', function(table) {
      table.increments('id').primary();
      table.integer('user_id').unsigned().references('id').inTable('users').onDelete('CASCADE');
      table.text('bio').defaultTo("no bio provided yet");
      table.string('profile_pic').defaultTo('https://avatar.iran.liara.run/username?username=default');
      table.string('specializations').defaultTo("not provided yet");
      table.integer('years_of_experience').defaultTo(4);
      table.string('contact').defaultTo('not provided yet');
      table.decimal('balance', 10, 2).defaultTo(0.00);
      table.boolean('available').defaultTo(false);
      table.enu('status', ['pending', 'approved', 'rejected']).defaultTo('pending').notNullable();
      table.timestamps(true, true);
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('writers');
  };
