const knex = require("../../db/db.js");
const jwt = require('jsonwebtoken');
const { verifyJWT } = require("../../utils/client/tokenUtils.js");

// async function writerProtect(req, res, next) {
//     const userId = req.user.id;

//     try {
//         // Check if the user has the role 'writer'
//         const roles = await knex('users')
//             .join('roles', 'users.role_id', 'roles.id')
//             .where('users.id', userId)
//             .andWhere('roles.name', 'writers') // Adjust to match your role name
//             .select('roles.name');

//         if (roles.length > 0) {
//             // User has writer role, grant access
//             next();
//         } else {
//             // User does not have writer role, deny access
//             return res.status(403).json({ message: 'Unauthorized: User does not have writer role' });
//         }
//     } catch (error) {
//         console.error('Error checking writer role:', error);
//         return res.status(500).json({ message: 'Internal Server Error' });
//     }
// }


// const protectWriter = async (req, res, next) => {
//     let token;
    
//     // Check for token in cookies (or you can also check headers)
//     token = req.cookies.jwt;

//     if (token) {
//         try {
//             // Verify the JWT token (you should pass the token, not the jwt module)
//             const decoded = jwt.verify(token, process.env.JWT_SECRET);

//             // Extract userId and role from the decoded token
//             const { id: userId, role } = decoded;

//             // Attach user info to req object
//             req.user = { userId, role };

//             // Proceed to the next middleware
//             next();
//         } catch (error) {
//             console.error('Authentication error:', error.message);

//             // Handle specific JWT errors
//             if (error.name === 'JsonWebTokenError') {
//                 return res.status(401).json({ message: "Invalid token" });
//             }
            
//             if (error.name === 'TokenExpiredError') {
//                 return res.status(401).json({ message: "Token expired" });
//             }

//             return res.status(500).json({ message: "Authentication failed" });
//         }
//     } else {
//         return res.status(401).json({ message: "Not authorized, no token" });
//     }
// };




const protectWriter = async (req, res, next) => {
    const token = req.cookies.jwt;
    console.log('Token:', token);  // Log token to check if it's being passed

    if (token) {
        try {
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            console.log('Decoded Token:', decoded);  // Log the decoded token

            // Check for 'userId' in the decoded token instead of 'id'
            if (!decoded.userId) {
                return res.status(401).json({ message: 'Token does not contain a valid userId' });
            }

            req.user = await knex('users')
                .select(
                    'users.id',
                    'users.username',
                    'users.email',
                    'users.profile_pic',
                    'users.created_at',
                    'users.updated_at',
                    'roles.name as role'
                )
                .join('roles', 'users.role_id', 'roles.id')
                .where({ 'users.id': decoded.userId }) 
                .first();

            if (!req.user) {
                console.log('User not found');
                return res.status(401).json({ message: 'Not authorized, user not found' });
            }

            console.log('User found:', req.user);
            next();
        } catch (error) {
            console.error('Token verification failed:', error);
            return res.status(401).json({ message: 'Not authorized, token verification failed' });
        }
    } else {
        console.log('No token provided');
        return res.status(401).json({ message: 'Not authorized, no token' });
    }
};


  
// const protectWriter = (req, res, next) => {
//     console.log('this is req.user', req.user)
//     if (!req.user) {
//         return res.status(401).json({ message: 'Not authorized, user not authenticated' });
//     }

//     console.log('Verifying writer role:', req.user.role);
//     const { role } = req.user; 
//     if (role !== 'writer') {
//         console.log('Access denied, user role:', role);
//         return res.status(403).json({ message: 'Access denied' });
//     }
//     next();
// }


module.exports = { protectWriter };

