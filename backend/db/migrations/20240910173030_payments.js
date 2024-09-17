exports.up = function(knex) {
    return knex.schema.createTable('payments', function(table) {
      table.increments('id').primary();
      table.string('paymentId').notNullable();
      table.string('userId').references('id').inTable('users').onDelete('CASCADE');
      table.string('serviceType').notNullable();
      table.decimal('amount', 10, 2).notNullable();
      table.string('currency').notNullable();
      table.enu('status', ['created', 'completed', 'failed', 'paid']).defaultTo('created');
      table.timestamp('completed_at').nullable();
      table.text('serviceData').notNullable(); 
      table.timestamps(true, true);
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('payments');
  };
  