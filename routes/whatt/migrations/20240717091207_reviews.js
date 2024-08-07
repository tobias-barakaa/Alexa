exports.up = function(knex) {
    return knex.schema.createTable('reviews', function(table) {
      table.string('id').primary().defaultTo(knex.raw('gen_random_uuid()'));
      table.text('comment');
      table.string('user_id').notNullable().references('id').inTable('users').onDelete('CASCADE');
      table.timestamps(true, true);
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('reviews');
  };
  