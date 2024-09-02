const { CATEGORIES, WORD_COUNT_RANGES, AUTHOR_TONES, LANGUAGES, DURATIONS, QUANTITY_RANGE } = require('../constants/categories');

function validateArticleInput(input) {
    const errors = [];
  
    if (!CATEGORIES.includes(input.category)) {
      errors.push('Invalid category');
    }
  
    if (!WORD_COUNT_RANGES.includes(input.number_of_words)) {
      errors.push('Invalid word count range');
    }
  
    if (!AUTHOR_TONES.includes(input.author_tone)) {
      errors.push('Invalid author tone');
    }
  
    if (!LANGUAGES.includes(input.language)) {
      errors.push('Invalid language');
    }
  
    if (!DURATIONS.includes(input.duration)) {
      errors.push('Invalid duration');
    }
  
    if (input.quantity < QUANTITY_RANGE.min || input.quantity > QUANTITY_RANGE.max) {
      errors.push('Invalid quantity');
    }
  
    return errors;
  }

module.exports = validateArticleInput;