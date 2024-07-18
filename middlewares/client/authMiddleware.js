const jwt = require('jsonwebtoken');
const knex = require("../../db/db.js");
const { verifyJWT } = require('../../utils/client/tokenUtils.js');


// Protect routes
// const protect = async (req, res, next) => {
//     let token;
//     token = req.cookies.jwt;
//     if (token) {
//         try {
//             const decoded = jwt.verify(token, process.env.JWT_SECRET);
//             req.user = await knex('users')
//                 .select('id', 'username', 'email', 'profile_pic', 'created_at', 'updated_at')
//                 .where({ id: decoded.id })
//                 .first();

//             next();
//         } catch (error) {
//             res.status(401).json({ message: 'Not authorized, token failed' });
//         }
//     } else {
//         res.status(401).json({ message: 'Not authorized, no token' });
//     }
// };

// const protect = async (req, res, next) => {
//   let token = req.cookies.jwt;
//   console.log('Cookies:', req.cookies); // Log cookies to check if the token is present

//   if (token) {
//     try {
//       const decoded = jwt.verify(token, process.env.JWT_SECRET);
//       req.user = await knex('users')
//         .select('id', 'username', 'email', 'profile_pic', 'created_at', 'updated_at')
//         .where({ id: decoded.id })
//         .first();
      
//       console.log('User found:', req.user); // Log user details
//       next();
//     } catch (error) {
//       console.error('Token verification failed:', error);
//       res.status(401).json({ message: 'Not authorized, token failed' });
//     }
//   } else {
//     console.error('No token found');
//     res.status(401).json({ message: 'Not authorized, no token' });
//   }
// };


//   module.exports = {protect}

const protect = async (req, res, next) => {
  console.log(req.cookies);
  const {token} = req.cookies;
  if(!token) throw new Error('Not authorized, no token');

  try {
    const {userId, role} = verifyJWT(token);
    req.user = {userId, role}
  next();
  } catch (error) {
  if(!token) throw new Error('Not authorized, no token');

    
  }

}

  module.exports = {protect}
  
  