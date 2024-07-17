exports.up = function(knex) {
    return knex.schema.alterTable('articles', table => {
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

  
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.alterTable('articles', table => {
      // Revert changes if needed
      // This is where you'd put the original enum definitions
      table.enu('category', [
        'Finance', 'Economy', 'Food', 'Travel', 'Health', 'Technology', 'Business', 'Education', 
        'Entertainment', 'Fashion', 'Sports', 'Science', 'Environment', 'Politics', 'Art', 
        'History', 'Literature', 'Music', 'Religion', 'Other'
      ]).notNullable();
        table.enu('number_of_words', [
            '100-200', '201-300', '301-500', '501-700', '701-1000'
        ]).notNullable();

        table.enu('author_tone', [
            'friendly', 'professional', 'casual', 'formal', 'humorous', 'informative', 
            'persuasive', 'promotional', 'technical', 'other'
        ]).notNullable();
        table.enu('status', [
            'pending', 'in_progress', 'completed', 'delivered', 'approved', 'rejected'
        ]).notNullable();
        table.enu('language', [
            'American English', 'British English', 'Canadian English', 'Australian English'
        ]).notNullable();
        table.enu('duration', [
            '3hrs', '6hrs', '12hrs', '24hrs', '2days', '3days', '5days', 'one_week', 'two_weeks'
          ]).notNullable();

    });
  };