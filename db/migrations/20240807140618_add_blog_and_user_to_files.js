exports.up = function(knex) {
    return knex.schema
      .hasTable('blogs')
      .then(function(exists) {
        if (!exists) {
          throw new Error('The blogs table does not exist. Please create it first.');
        }
      })
      .then(function() {
        return knex.schema.table('files', function(table) {
          // Add columns without constraints first
          table.uuid('blog_id').nullable();
          table.uuid('user_id').nullable();
        });
      })
      .then(function() {
        // Clean up any invalid data
        return knex('files')
          .whereNotIn('blog_id', knex.select('id').from('blogs'))
          .update({ blog_id: null });
      })
      .then(function() {
        return knex('files')
          .whereNotIn('user_id', knex.select('id').from('users'))
          .update({ user_id: null });
      })
      .then(function() {
        // Now add the constraints
        return knex.schema.alterTable('files', function(table) {
          table.foreign('blog_id').references('id').inTable('blogs').onDelete('CASCADE');
          table.foreign('user_id').references('id').inTable('users').onDelete('CASCADE');
        });
      });
  };
  
  exports.down = function(knex) {
    return knex.schema.table('files', function(table) {
      table.dropForeign(['blog_id']);
      table.dropForeign(['user_id']);
      table.dropColumn('blog_id');
      table.dropColumn('user_id');
    });
  };