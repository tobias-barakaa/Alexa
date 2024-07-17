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
    })
    .then(() => knex.schema.raw(`
        ALTER TABLE articles
        ADD CONSTRAINT category_check CHECK (category IN ('Finance', 'Economy', 'Food', 'Travel', 'Health', 'Technology', 'Business', 'Education', 'Entertainment', 'Fashion', 'Sports', 'Science', 'Environment', 'Politics', 'Art', 'History', 'Literature', 'Music', 'Religion', 'Other')),
        ADD CONSTRAINT number_of_words_check CHECK (number_of_words IN ('100-200', '201-300', '301-500', '501-700', '701-1000')),
        ADD CONSTRAINT author_tone_check CHECK (author_tone IN ('friendly', 'professional', 'casual', 'formal', 'humorous', 'informative', 'persuasive', 'promotional', 'technical', 'other')),
        ADD CONSTRAINT status_check CHECK (status IN ('pending', 'in_progress', 'completed', 'delivered', 'approved', 'rejected')),
        ADD CONSTRAINT language_check CHECK (language IN ('American English', 'British English', 'Canadian English', 'Australian English')),
        ADD CONSTRAINT duration_check CHECK (duration IN ('3hrs', '6hrs', '12hrs', '24hrs', '2days', '3days', '5days', 'one_week', 'two_weeks'))
    `));
};

exports.down = function(knex) {
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
    })
    .then(() => knex.schema.raw(`
        ALTER TABLE articles
        DROP CONSTRAINT IF EXISTS category_check,
        DROP CONSTRAINT IF EXISTS number_of_words_check,
        DROP CONSTRAINT IF EXISTS author_tone_check,
        DROP CONSTRAINT IF EXISTS status_check,
        DROP CONSTRAINT IF EXISTS language_check,
        DROP CONSTRAINT IF EXISTS duration_check
    `));
};
