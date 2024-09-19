const { check, validationResult } = require('express-validator');

// Validation for the Order Article request
const validateOrderArticle = [
  check('title').notEmpty().withMessage('Title is required'),
  check('description').notEmpty().withMessage('Description is required'),
  check('keywords').notEmpty().withMessage('Keywords are required'),
  check('word_count').notEmpty().withMessage('Word count is required'),
  check('duration').notEmpty().withMessage('Duration is required'),
  check('language').notEmpty().withMessage('Language is required'),
  check('cost').isFloat({ min: 0 }).withMessage('Cost must be a positive number'),
  check('quantity').isInt({ min: 1 }).withMessage('Quantity must be at least 1'),

  // Middleware to check validation result
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];

module.exports = { validateOrderArticle };
