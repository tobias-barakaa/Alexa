exports.up = function (knex) {
    return knex.schema.createTable("orderArticle", (table) => {
      table.increments("id").primary(); // Primary key
      table.string("title").notNullable(); // Title of the article
      table.text("description").notNullable(); // Description of the article
      table.string("keywords").notNullable(); // Keywords
      table.string("word_count").defaultTo("300 words"); // Word count
      table.string("duration").defaultTo("1 day"); // Duration of the article
      table.string("complexity").defaultTo("General"); // Complexity level
      table.string("language").defaultTo("American English"); // Language
      table.integer('quantity').unsigned().notNullable().defaultTo(1);
      table.integer('user_id').unsigned().references('id').inTable('users').onDelete('CASCADE');
      table.decimal("cost", 10, 2).defaultTo(50); // Calculated cost
      table.enu('status', ['Pending', 'Published', 'Completed', 'Processing', 'Deleted', 'Rejected']).defaultTo('Pending');
        table.timestamps(true, true);
    });
  };
  
  exports.down = function (knex) {
    return knex.schema.dropTableIfExists("orderArticle");
  };
  