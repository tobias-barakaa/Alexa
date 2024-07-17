// src/constants/articleConstants.js

const CATEGORIES = [
  'Finance', 'Economy', 'Food', 'Travel', 'Health', 'Technology', 'Business', 'Education', 
  'Entertainment', 'Fashion', 'Sports', 'Science', 'Environment', 'Politics', 'Art', 
  'History', 'Literature', 'Music', 'Religion', 'Other'
];

const WORD_COUNT_RANGES = [
  '100-200', '201-300', '301-500', '501-700', '701-1000'
];

const AUTHOR_TONES = [
  'friendly', 'professional', 'casual', 'formal', 'humorous', 'informative', 
  'persuasive', 'promotional', 'technical', 'other'
];

const ARTICLE_STATUSES = [
  'pending', 'in_progress', 'completed', 'delivered', 'approved', 'rejected'
];

const LANGUAGES = [
  'American English', 'British English', 'Canadian English', 'Australian English'
];

const DURATIONS = [
  '3hrs', '6hrs', '12hrs', '24hrs', '2days', '3days', '5days', 'one_week', 'two_weeks'
];

const QUANTITY_RANGE = {
  min: 1,
  max: 10
};

module.exports = {
  CATEGORIES,
  WORD_COUNT_RANGES,
  AUTHOR_TONES,
  ARTICLE_STATUSES,
  LANGUAGES,
  DURATIONS,
  QUANTITY_RANGE
};
