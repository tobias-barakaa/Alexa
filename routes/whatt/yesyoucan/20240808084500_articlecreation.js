      exports.up = function(knex) {
            return knex.schema.createTable('articlecreation', function(table) {
                table.increments('id').primary();
                table.string('title').notNullable();
                table.text('description').notNullable();
                table.integer('category_id').unsigned().notNullable().references('id').inTable('categories');
                table.text('Keywords').defaultTo('').nullable();
                table.string('complexity').notNullable();
                table.integer('number_of_words_id').unsigned().notNullable().references('id').inTable('numberofwords');
                table.integer('timeframe_id').unsigned().notNullable().references('id').inTable('timeframe');
                table.integer('quantity_id').unsigned().notNullable().references('id').inTable('quantity');
                table.string('language').defaultTo('American English');
                  
                table.integer('user_id').unsigned().references('id').inTable('users').onDelete('CASCADE');
                table.decimal('cost', 10, 2).notNullable().defaultTo(0.00);
                table.integer('status_id').unsigned().notNullable().references('id').inTable('status');
                table.timestamps(true, true);
            });
        };
        
        exports.down = function(knex) {
            return knex.schema.dropTable('articlecreation');
        };
        

table.integer('word_count').unsigned().notNullable().defaultTo(300);
table.integer('user_id').unsigned().references('id').inTable('users').onDelete('CASCADE');
table.string('language').defaultTo('American English');
table.enu('status', ['Pending', 'Published', 'Completed', 'Processing', 'Deleted', 'Rejected']).defaultTo('Pending');
table.string('duration').defaultTo('1 day');
table.string('category').defaultTo('General'); 
