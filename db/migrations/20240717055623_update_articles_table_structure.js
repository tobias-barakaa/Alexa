exports.up = function(knex) {
    return knex.schema.alterTable('articles', table => {
      // Update enums
      table.enu('category', [
        'Finance', 'Economy', 'Food', 'Travel', 'Health', 'Technology', 'Business', 'Education', 
        'Entertainment', 'Fashion', 'Sports', 'Science', 'Environment', 'Politics', 'Art', 
        'History', 'Literature', 'Music', 'Religion', 'Other'
      ]).alter();
  
      table.enu('number_of_words', [
        '100-200', '201-300', '301-500', '501-700', '701-1000'
      ]).alter();
  
      table.enu('author_tone', [
        'friendly', 'professional', 'casual', 'formal', 'humorous', 'informative', 
        'persuasive', 'promotional', 'technical', 'other'
      ]).alter();
  
      table.enu('status', [
        'pending', 'in_progress', 'completed', 'delivered', 'approved', 'rejected'
      ]).alter();
  
      table.enu('language', [
        'American English', 'British English', 'Canadian English', 'Australian English'
      ]).alter();
  
      table.enu('duration', [
        '3hrs', '6hrs', '12hrs', '24hrs', '2days', '3days', '5days', 'one_week', 'two_weeks'
      ]).alter();
  
      // Drop columns
      table.dropColumn('content');
      table.dropColumn('type');
      table.dropColumn('client_id');
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.alterTable('articles', table => {
      // Revert enum changes (you'll need to provide the original enum values here)
      // For example:
      // table.enu('category', [...original values...]).alter();

      table.enu('category', [
        'Finance', 'Economy', 'Food', 'Travel', 'Health', 'Technology', 'Business', 'Education', 
        'Entertainment', 'Fashion', 'Sports', 'Science', 'Environment', 'Politics', 'Art', 
        'History', 'Literature', 'Music', 'Religion', 'Other'
      ]).alter();
  
      table.enu('number_of_words', [
        '100-200', '201-300', '301-500', '501-700', '701-1000'
      ]).alter();

      table.enu('author_tone', [
        'friendly', 'professional', 'casual', 'formal', 'humorous', 'informative', 
        'persuasive', 'promotional', 'technical', 'other'
      ]).alter();
      table.enu('status', [
        'pending', 'in_progress', 'completed', 'delivered', 'approved', 'rejected'
      ]).alter();
      table.enu('language', [
        'American English', 'British English', 'Canadian English', 'Australian English'
      ]).alter();
        table.enu('duration', [
            '3hrs', '6hrs', '12hrs', '24hrs', '2days', '3days', '5days', 'one_week', 'two_weeks'
        ]).alter();
  
      //  dropped columns
      table.text('content').defaultTo('');
      table.enu('type', [
        'ai_written', 'manually_written', 'collaboratively_written'
      ]).notNullable();
      table.string('client_id').references('id').inTable('users').onDelete('CASCADE');
    });
  };