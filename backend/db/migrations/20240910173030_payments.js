exports.up = function(knex) {
  return knex.schema.createTable('payments', function(table) {
    table.increments('id').primary();
    table.string('payment_id').notNullable();
    table.integer('user_id').unsigned().references('id').inTable('users').onDelete('CASCADE');
    table
      .integer("order_id")
      .unsigned()
      .references("id")
      .inTable("order_articles")
      .onDelete("CASCADE");
    table.string('service_type').notNullable();
    table.decimal('amount', 10, 2).notNullable();
    table.string('currency').notNullable();
    table.enu('status', ['created', 'completed', 'failed', 'paid']).defaultTo('created');
    table.timestamp('completed_at').nullable();
    table.text('service_data').notNullable().defaultTo('{}');
    table.timestamps(true, true);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('payments');
};
