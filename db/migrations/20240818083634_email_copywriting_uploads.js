exports.up = function(knex) {
    return knex.schema.createTable('email_copywriting_uploads', function(table) {
      table.increments('id').primary(); 
      table.string('file_url').notNullable(); 
      table.string('public_id').notNullable();
      
      table.foreign('recipient_id').references('id').inTable('users').onDelete('CASCADE');
      table.foreign('uploaded_by').references('id').inTable('users').onDelete('CASCADE');

      table.uuid('email_copywriting_id').references('email_copywriting_id').inTable('email_copywriting').onDelete('CASCADE'); // Reference to email_copywriting table
      
      table.timestamps(true, true); 
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('email_copywriting_uploads');
  };
  