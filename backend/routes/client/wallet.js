exports.up = function(knex) {
    return knex.schema
      .createTable('users', function(table) {
        table.increments('id').primary();
        table.string('username').notNullable().unique();
        table.string('email').notNullable().unique();
        table.string('password').notNullable();
        table.timestamps(true, true);
      })
      .createTable('wallets', function(table) {
        table.increments('id').primary();
        table.integer('user_id').unsigned().notNullable();
        table.foreign('user_id').references('users.id').onDelete('CASCADE');
        table.decimal('balance', 10, 2).notNullable().defaultTo(0.00);
        table.string('currency').notNullable().defaultTo('USD');
        table.timestamps(true, true);
      })
      .createTable('transactions', function(table) {
        table.increments('id').primary();
        table.integer('wallet_id').unsigned().notNullable();
        table.foreign('wallet_id').references('wallets.id').onDelete('CASCADE');
        table.enum('type', ['deposit', 'withdrawal', 'transfer']).notNullable();
        table.decimal('amount', 10, 2).notNullable();
        table.integer('to_wallet_id').unsigned().nullable();
        table.foreign('to_wallet_id').references('wallets.id').onDelete('SET NULL');
        table.string('description').nullable();
        table.timestamps(true, true);
      });
  };
  
  exports.down = function(knex) {
    return knex.schema
      .dropTableIfExists('transactions')
      .dropTableIfExists('wallets')
      .dropTableIfExists('users');
  };