exports.up = function(knex) {
    return knex.schema.createTable('wallet', function(table) {
      table.increments('id').primary(); // Unique identifier for the wallet
      table.integer('user_id').unsigned().notNullable(); // User ID referencing the users table
      table.foreign('user_id').references('id').inTable('users').onDelete('CASCADE'); // Foreign key constraint
      table.decimal('balance', 10, 2).notNullable().defaultTo(0.00); // Wallet balance
      table.string('currency').notNullable().defaultTo('USD'); // Currency type (e.g., USD)
      table.string('wallet_name').nullable(); // Optional wallet name for user identification
      table.timestamps(true, true); // Created and updated timestamps
    })
    .then(() => console.log('wallet table created'))
    .catch((error) => console.error('Error creating wallet table:', error));
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTableIfExists('wallet'); // Drop the wallet table if it exists
  };
  