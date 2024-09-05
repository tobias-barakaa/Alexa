// Migration to create the email_verification_tokens table
exports.up = function(knex) {
    return knex.schema.createTable('email_verification_tokens', function(table) {
      table.increments('id').primary();
      table.integer('user_id').unsigned().references('id').inTable('users').onDelete('CASCADE');
      table.string('verifyToken').notNullable().unique(); 
      table.timestamp('expires_at').notNullable(); 
      table.timestamps(true, true); 
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('email_verification_tokens');
  };
  