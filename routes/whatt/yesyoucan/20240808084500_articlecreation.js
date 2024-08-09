      exports.up = function(knex) {
            return knex.schema.createTable('articlecreation', function(table) {
                table.increments('id').primary();
                table.string('title').notNullable();
                table.text('description').notNullable();
                table.string('category').defaultTo('General'); 
                table.text('Keywords').defaultTo('').nullable();
                table.string('complexity').notNullable().defaultTo('Basic');
                table.integer('word_count').unsigned().notNullable().defaultTo(300);
                table.string('duration').defaultTo('1 day');
                table.integer('quantity').unsigned().notNullable().defaultTo(1);
                table.string('language').defaultTo('American English');                  
                table.integer('user_id').unsigned().references('id').inTable('users').onDelete('CASCADE');
                table.decimal('cost', 10, 2).notNullable().defaultTo(0.00);
                table.enu('status', ['Pending', 'Published', 'Completed', 'Processing', 'Deleted', 'Rejected']).defaultTo('Pending');
                table.timestamps(true, true);
            });
        };
        
        exports.down = function(knex) {
            return knex.schema.dropTable('articlecreation');
        };
        