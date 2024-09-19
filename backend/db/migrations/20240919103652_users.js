exports.up = function(knex) {
    return knex.schema.createTable('users', function(table) {
      table.increments('id').primary();
      table.string('username').notNullable().unique();
      table.string('email').notNullable().unique();
      table.string('password').notNullable();
      table.integer('role_id').unsigned().notNullable().references('id').inTable('roles').onDelete('CASCADE');
      table.decimal('balance', 14, 2).defaultTo(0); 
      table.string('profile_pic').nullable(); 
      table.timestamps(true, true);
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('users');
  };
  