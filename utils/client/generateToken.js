const jwt = require('jsonwebtoken');

const generateToken = (res, id) => {
    const token = jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: '30d'
      });
      res.cookie('jwt', token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production' || 'development',
        maxAge: 30 * 24 * 60 * 60 * 1000
      })

      console.log('Token generated and set in cookie:', token);

}

module.exports = generateToken;
