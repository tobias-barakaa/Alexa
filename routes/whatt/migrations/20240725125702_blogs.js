 /**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('blogs', (table) => {
      table.uuid('id').primary().defaultTo(knex.raw('gen_random_uuid()'));
      table.string('title').notNullable();
      table.integer('category_id').unsigned().notNullable().references('id').inTable('blogcategories');
      table.text('tags').defaultTo('').nullable();
      table.text('excerpt').defaultTo('').nullable();
      table.integer('number_of_words_id').unsigned().notNullable().references('id').inTable('numberofwords');
      table.integer('timeframe_id').unsigned().notNullable().references('id').inTable('timeframe');
      table.string('user_id').notNullable().references('id').inTable('users'); 
      table.enum('status', ['draft', 'published', 'archived', 'pending review', 'rejected', 'scheduled']).defaultTo('draft');
      table.timestamp('published_at');
      table.timestamps(true, true); 
    });
  };
  
  /**
   * @param { import("knex").Knex } knex
   * @returns { Promise<void> }
   */
  exports.down = function(knex) {
    return knex.schema.dropTable('blogs');
  };
  