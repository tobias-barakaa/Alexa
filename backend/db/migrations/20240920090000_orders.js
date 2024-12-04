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
  




















  import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable("order_article", (table) => {
    table.uuid("id").primary().defaultTo(knex.raw("uuid_generate_v4()"));

    table
      .uuid("user_id")
      .notNullable()
      .references("id")
      .inTable("users")
      .onDelete("CASCADE");

    table
      .uuid("order_id")
      .nullable()
      .references("id")
      .inTable("orders")
      .onDelete("CASCADE");

    table.string("title").notNullable();
    table.text("description").notNullable();
    table.string("keywords").notNullable();
    table.string("word_count").defaultTo("300 words");
    table.string("duration").defaultTo("1 day");
    table.string("complexity").defaultTo("General");
    table.string("language").defaultTo("American English");

    table
      .integer("quantity")
      .unsigned()
      .notNullable()
      .defaultTo(1);

    table.decimal("cost", 10, 2).notNullable().defaultTo(50);

    table
      .enu("status", ["Pending", "Published", "Completed", "Processing", "Deleted", "Rejected"])
      .defaultTo("Pending");

    table.boolean("is_paid").defaultTo(false);

    table.timestamps(true, true);
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTableIfExists("order_article");
}




// src/migrations/[timestamp]_create_wallet_table.ts
import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable("wallet", (table) => {
    // Primary key as UUID
    table.uuid("id").primary().defaultTo(knex.raw("uuid_generate_v4()"));

    // Foreign key to 'users' table (UUID)
    table
      .uuid("user_id")
      .notNullable()
      .references("id")
      .inTable("users")
      .onDelete("CASCADE");

    // Wallet balance
    table.decimal("balance", 10, 2).notNullable().defaultTo(0.00);

    // Currency type (e.g., USD)
    table.string("currency").notNullable().defaultTo("USD");

    // Optional wallet name
    table.string("wallet_name").nullable();

    // Created and updated timestamps
    table.timestamps(true, true);
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTableIfExists("wallet");
}
