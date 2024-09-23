// migrations/20240923140000_create_cost_adjust_table.js

exports.up = function (knex) {
    return knex.schema.createTable('cost_update', (table) => {
        table.increments('id').primary(); // Primary key

        table
          .integer('article_id')
          .unsigned()
          .nullable()
          .references('id')
          .inTable('create') // References the "create" table (assuming "create" is the correct table name)
          .notNullable()
          .onDelete('CASCADE'); // Delete adjustments if the article is deleted
        table.decimal('original_cost', 10, 2).notNullable(); // Original cost
        table.decimal('new_cost', 10, 2).notNullable(); // New cost after adjustment
        table.decimal('adjustment_amount', 10, 2).notNullable(); // Adjustment amount

        // Relaxing the ENUM constraint for adjustment_type, or you can keep it if no errors are related to this
        table.string('adjustment_type').notNullable(); // No ENUM, just a string for flexibility

        // Relax the ENUM constraint for payment_status or expand allowed values to avoid errors
        table.string('payment_status').defaultTo('Pending'); // Allow any string value for payment_status

        // Foreign key to users table, assuming user_id is valid
        table.integer('user_id').unsigned().references('id').inTable('users').onDelete('CASCADE');

        table.boolean('is_processed').defaultTo(false); // Flag to mark if the adjustment is processed

        table.timestamp('created_at').defaultTo(knex.fn.now()); // Auto-generate created timestamp
        table.timestamp('updated_at').defaultTo(knex.fn.now()); // Auto-generate updated timestamp
    });
};

exports.down = function (knex) {
    return knex.schema.dropTableIfExists('cost_update');
};
