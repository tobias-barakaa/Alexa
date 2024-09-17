exports.up = function(knex) {
  return knex.schema.createTable('payments', function(table) {
    table.increments('id').primary();
    table.string('payment_id').notNullable(); // Changed to snake_case
    table.integer('user_id').unsigned().references('id').inTable('users').onDelete('CASCADE');
    // Consistent user_id
    table
      .integer("order_id")
      .unsigned()
      .references("id")
      .inTable("order_articles") // Changed to snake_case
      .onDelete("CASCADE");
    table.string('service_type').notNullable(); // Changed to snake_case
    table.decimal('amount', 10, 2).notNullable();
    table.string('currency').notNullable();
    table.enu('status', ['created', 'completed', 'failed', 'paid']).defaultTo('created');
    table.timestamp('completed_at').nullable();
    table.text('service_data').notNullable(); // Changed to snake_case
    table.timestamps(true, true);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('payments');
};