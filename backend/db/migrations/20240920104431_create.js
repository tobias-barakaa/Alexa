// migrations/20240920121000_create_create_article_table.js

exports.up = function (knex) {
    return knex.schema.createTable('create', (table) => {
      table.increments('id').primary(); // Primary key
      table
        .integer('order_id')
        .unsigned()
        .nullable()
        .references('id')
        .inTable('order')
        .onDelete('CASCADE'); // Foreign key to 'orders'
      table.string('title').notNullable(); // Title of the article
      table.text('description').notNullable(); // Description of the article
      table.string('keywords').notNullable(); // Keywords
      table.string('word_count').defaultTo('300 words'); // Word count
      table.string('duration').defaultTo('1 day'); // Duration
      table.string('complexity').defaultTo('General'); // Complexity level
      table.string('language').defaultTo('American English'); // Language
      table.integer('quantity').unsigned().notNullable().defaultTo(1); // Quantity
      table.integer('user_id').unsigned().references('id').inTable('users').onDelete('CASCADE');
      table.decimal('cost', 10, 2).notNullable().defaultTo(50); // Cost of the article
      table
        .enu('status', ['Pending', 'Published', 'Completed', 'Processing', 'Deleted', 'Rejected'])
        .defaultTo('Pending'); // Article status
      table.boolean('is_paid').defaultTo(false); // Payment status
      table.timestamp('created_at').defaultTo(knex.fn.now()); // Article creation time
      table.timestamp('updated_at').defaultTo(knex.fn.now()); // Last updated time
    });
  };
  
  exports.down = function (knex) {
    return knex.schema.dropTableIfExists('create');
  };
  
