exports.up = function (knex) {
    return knex.schema.createTable("orderArticle", (table) => {
      table.increments("id").primary(); // Primary key
      table.string("title").notNullable(); // Title of the article
      table.text("description").notNullable(); // Description of the article
      table.string("keywords").notNullable(); // Keywords
      table.string("word_count").defaultTo("300 words"); // Word count
      table.string("duration").defaultTo("1 day"); // Duration of the article
      table.string("complexity").defaultTo("Basic"); // Complexity level
      table.string("language").defaultTo("American English"); // Language
      table.decimal("cost", 10, 2).defaultTo(50); // Calculated cost
      table.timestamps(true, true); // created_at and updated_at
    });
  };
  
  exports.down = function (knex) {
    return knex.schema.dropTableIfExists("orderArticle");
  };
  