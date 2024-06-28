exports.up = function(knex) {
    return knex.schema.createTable('articles', table => {
        table.string('id').primary().defaultTo(knex.raw('gen_random_uuid()'));
        table.text('description').notNullable();
        table.enu('category', [
            'Finance',
            'Economy',
            'Food',
            'Travel',
            'Health',
            'Technology',
            'Business',
            'Education',
            'Entertainment',
            'Fashion',
            'Sports',
            'Science',
            'Environment',
            'Politics',
            'Art',
            'History',
            'Literature',
            'Music',
            'Religion',
            'Other'
        ]).notNullable(); // Category column with enum values
        table.integer('number_of_words').notNullable();
        table.integer('quantity').notNullable();
        table.string('keywords').notNullable();
        table.enu('author_tone', [
            'friendly',
            'professional',
            'casual',
            'formal',
            'humorous',
            'informative',
            'persuasive',
            'promotional',
            'technical',
            'other'
        ]).notNullable();
        table.enu('status', [
            'pending',
            'in_progress',
            'completed',
            'delivered',
            'approved',
            'rejected'
        ]).defaultTo('pending').notNullable();
        table.enu('language', [
            'American English',
            'British English',
            'Canadian English',
            'Australian English'
        ]).notNullable();
        table.enu('type', [
            'ai_written',
            'manually_written',
            'collaboratively_written'
        ]).notNullable();
        table.string('sample_article_id').references('id').inTable('sample_articles').onDelete('SET NULL');
        table.string('client_id').references('id').inTable('users').onDelete('CASCADE');
        table.enu('duration', [
            '3hrs',
            '6hrs',
            '12hrs',
            '24hrs',
            '2days',
            '3days',
            '5days',
            'one_week',
            'two_weeks'
        ]).notNullable();
        table.decimal('cost', 10, 2).notNullable();
        table.timestamps(true, true);
    })
    .then(() => knex.raw('ALTER TABLE articles ADD CONSTRAINT quantity_check CHECK (quantity BETWEEN 1 AND 10)'));
};

exports.down = function(knex) {
    return knex.schema.dropTable('articles');
};
