const { check, validationResult } = require('express-validator');

const validateArticleCreation = [
  check('title').notEmpty().withMessage('Title is required'),
  check('description').notEmpty().withMessage('Description is required'),
  check('keywords').notEmpty().withMessage('Keywords are required'),
  check('word_count').isInt({ min: 1 }).withMessage('Word count must be a positive integer'),
  check('complexity').notEmpty().withMessage('Complexity is required'),
  check('cost').isFloat({ min: 0 }).withMessage('Cost must be a positive number'),
  check('number_of_words_id').isInt().withMessage('Number of words ID must be an integer'),
  check('timeframe_id').isInt().withMessage('Timeframe ID must be an integer'),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];

module.exports = { validateArticleCreation };
