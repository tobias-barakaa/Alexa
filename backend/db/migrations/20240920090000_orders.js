// migrations/20240920120000_create_orders_table.js

exports.up = function (knex) {
    return knex.schema.createTable('orders', (table) => {
      table.increments('id').primary(); // Primary key
      table
        .integer('user_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('users')
        .onDelete('CASCADE'); // Foreign key to 'users'
      table.string('paypal_transaction_id').nullable(); // PayPal Transaction ID
      table.string('paypal_payer_id').nullable(); // PayPal Payer ID
      table.string('payer_email').nullable(); // Payer's email address
      table.decimal('paypal_amount', 10, 2).nullable(); // PayPal payment amount
      table.decimal('cost', 10, 2).notNullable().defaultTo(0); // Total cost of the order
      table
        .enu('status', ['Pending', 'Completed', 'Failed', 'Refunded'])
        .defaultTo('Pending'); // Order status
      table.boolean('is_paid').defaultTo(false); // Payment status
      table.timestamp('created_at').defaultTo(knex.fn.now()); // Order creation time
      table.timestamp('updated_at').defaultTo(knex.fn.now()); // Last updated time
    });
  };
  
  exports.down = function (knex) {
    return knex.schema.dropTableIfExists('orders');
  };
  