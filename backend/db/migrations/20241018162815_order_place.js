exports.up = function (knex) {
    return knex.schema.createTable('order_place', (table) => {
      // Primary Key
      table.increments('id').primary(); // Auto-incrementing primary key
      
      // Foreign Keys
      table
        .integer('order_id')
        .unsigned()
        .nullable()
        .references('id')
        .inTable('order')
        .onDelete('CASCADE'); // Foreign key to 'order' table
  
      table
        .integer('user_id')
        .unsigned()
        .references('id')
        .inTable('users')
        .onDelete('CASCADE'); // Foreign key to 'users' table (the client placing the order)
      
      table
        .integer('writer_id')
        .unsigned()
        .references('id')
        .inTable('writers_profile')
        .onDelete('SET NULL'); // Foreign key to 'users' table (the writer assigned to the order)
      
      // Columns for the project details
      table.string('project_type').notNullable().defaultTo('other'); // e.g., 'other'
      table.string('title').notNullable(); // Project title
      table.text('description').notNullable(); // Project description
      table.string('requirements'); // Project requirements
      table.string('deadline'); // Project deadline (e.g., '12hrs')
      table.decimal('budget', 10, 2).notNullable(); // Budget for the project
  
      // Additional columns
      table.decimal('balance', 10, 2).notNullable().defaultTo(0.00); // Balance for the project
      table.string('status').notNullable().defaultTo('Pending'); // Status of the order (e.g., 'Pending', 'Completed')
      table.boolean('is_paid').notNullable().defaultTo(false); // Whether the order is paid or not
  
      // Timestamps
      table.timestamps(true, true); // Automatically create 'created_at' and 'updated_at' timestamps
    });
  };
  
  exports.down = function (knex) {
    return knex.schema.dropTableIfExists('order_place');
  };
  