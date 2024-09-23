// migrations/20240920130000_create_article_cost_adjustments_table.js

exports.up = function (knex) {
    return knex.schema.createTable('article_cost_adjustments', (table) => {
        table.increments('id').primary();
        
        table
        .integer('article_id')
        .unsigned()
        .nullable()
        .references('id')
        .inTable('create')
        .notNullable()
        .onDelete('CASCADE');
        table
        .integer('order_id')
        .unsigned()
        .nullable()
        .references('id')
        .inTable('order')
        .notNullable()
        .onDelete('CASCADE');
        table.decimal('original_cost', 10, 2).notNullable(); 
        table.decimal('new_cost', 10, 2).notNullable(); 
        table.decimal('adjustment_amount', 10, 2).notNullable(); 

        table
          .enu('adjustment_type', ['refund', 'additional_payment'])
          .notNullable(); 

        table
          .enu('payment_status', ['Pending', 'Completed', 'Failed', 'Refunded'])
          .defaultTo('Pending'); 
        table.integer('user_id').unsigned().references('id').inTable('users').onDelete('CASCADE');
                
        table.boolean('is_processed').defaultTo(false); 

        table.timestamp('created_at').defaultTo(knex.fn.now()); 
        table.timestamp('updated_at').defaultTo(knex.fn.now()); 
    });
};

exports.down = function (knex) {
    return knex.schema.dropTableIfExists('article_cost_adjustments');
};
