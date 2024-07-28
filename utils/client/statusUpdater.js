// backgroundJobs/statusUpdater.js
const cron = require('node-cron');
const knex = require('../db/knex');

const updateArticleStatus = async () => {
  try {
    // Update articles from 'pending' to 'processing' after 50 minutes
    await knex('articles')
      .where('status', 'pending')
      .andWhere('created_at', '<', knex.raw("now() - interval '50 minutes'"))
      .update({ status: 'processing' });

    // Add more status updates as needed
  } catch (error) {
    console.error('Error updating article status:', error);
  }
};

// Schedule the task to run every minute
cron.schedule('* * * * *', updateArticleStatus);
