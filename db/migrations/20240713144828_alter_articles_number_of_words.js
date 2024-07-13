exports.up = function(knex) {
    return knex.schema.alterTable('articles', table => {
      // First, remove any existing default value and constraints
      return knex.raw('ALTER TABLE articles ALTER COLUMN number_of_words DROP DEFAULT');
    })
    .then(() => {
      return knex.raw('ALTER TABLE articles DROP CONSTRAINT IF EXISTS articles_number_of_words_check');
    })
    .then(() => {
      // Then, alter the column type to TEXT
      return knex.raw(`
        ALTER TABLE articles 
        ALTER COLUMN number_of_words TYPE TEXT USING
        CASE
          WHEN number_of_words BETWEEN 100 AND 200 THEN '100-200'
          WHEN number_of_words BETWEEN 201 AND 300 THEN '201-300'
          WHEN number_of_words BETWEEN 301 AND 500 THEN '301-500'
          WHEN number_of_words BETWEEN 501 AND 700 THEN '501-700'
          WHEN number_of_words BETWEEN 701 AND 1000 THEN '701-1000'
          ELSE '301-500'
        END
      `);
    })
    .then(() => {
      // Add the new constraint
      return knex.raw(`
        ALTER TABLE articles 
        ADD CONSTRAINT articles_number_of_words_check 
        CHECK (number_of_words IN ('100-200', '201-300', '301-500', '501-700', '701-1000'))
      `);
    })
    .then(() => {
      // Finally, set a default value
      return knex.raw(`
        ALTER TABLE articles 
        ALTER COLUMN number_of_words SET DEFAULT '301-500'
      `);
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.alterTable('articles', table => {
      // Revert the changes
      return knex.raw('ALTER TABLE articles ALTER COLUMN number_of_words DROP DEFAULT')
        .then(() => knex.raw('ALTER TABLE articles DROP CONSTRAINT IF EXISTS articles_number_of_words_check'))
        .then(() => knex.raw(`
          ALTER TABLE articles 
          ALTER COLUMN number_of_words TYPE INTEGER USING (CASE 
            WHEN number_of_words = '100-200' THEN 150
            WHEN number_of_words = '201-300' THEN 250
            WHEN number_of_words = '301-500' THEN 400
            WHEN number_of_words = '501-700' THEN 600
            WHEN number_of_words = '701-1000' THEN 850
            ELSE 400
          END)
        `))
        .then(() => knex.raw('ALTER TABLE articles ALTER COLUMN number_of_words SET DEFAULT 400'));
    });
  };