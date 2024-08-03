const { check, validationResult } = require('express-validator');

// Validation middleware
const validateEmailCopywriting = [
  check('projectType').notEmpty().withMessage('Project type is required'),
  check('projectDescription').notEmpty().withMessage('Project description is required'),
  check('deadline').notEmpty().withMessage('Deadline is required'),
  check('wordCount').isInt({ min: 1 }).withMessage('Word count must be a positive integer'),
  check('cost').isFloat({ min: 0 }).withMessage('Cost must be a positive number'),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];

module.exports = { validateEmailCopywriting };
