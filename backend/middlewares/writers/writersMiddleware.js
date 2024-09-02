const knex = require("../../db/db.js");
const jwt = require('jsonwebtoken');

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


const protectWriter = async (req, res, next) => {
    let token;
    // Assuming the token is stored in headers or cookies
    token = req.cookies.jwt;

    if (token) {
        try {
            // Verify the JWT token
            const decoded = jwt.verify(token, process.env.JWT_SECRET);

            // Fetch user details including role from the database
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
                .where({ 'users.id': decoded.id })
                .first();

            console.log('Decoded user:', req.user); // Log decoded user for debugging

            if (!req.user) {
                return res.status(401).json({ message: 'Not authorized, user not found' });
            }

            // Check if user has writer role
            if (req.user.role !== 'writers') {
                console.log('User role:', req.user.role); // Log user role for debugging
                return res.status(403).json({ message: 'Access denied, user is not a writer' });
            }

            // User is authenticated and has writer role, proceed
            next();
        } catch (error) {
            console.error('Error during token verification:', error);
            return res.status(401).json({ message: 'Not authorized, token failed' });
        }
    } else {
        res.status(401).json({ message: 'Not authorized, no token' });
    }
};

module.exports = { protectWriter };
