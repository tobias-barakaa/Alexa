const knex = require("../../db/db.js");
const jwt = require('jsonwebtoken');

const protectAdmin = async (req, res, next) => {
    const token = req.cookies.jwt;

    if (token) {
        try {
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            console.log('Token decoded:', decoded);

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

            if (!req.user) {
                console.log('User not found');
                return res.status(401).json({ message: 'Not authorized, user not found' });
            }

            console.log('User found:', req.user);
            next();
        } catch (error) {
            console.error('Token verification failed:', error);
            return res.status(401).json({ message: 'Not authorized, token failed' });
        }
    } else {
        console.log('No token provided');
        return res.status(401).json({ message: 'Not authorized, no token' });
    }
};

const verifyAdmin = (req, res, next) => {
    if (!req.user) {
        return res.status(401).json({ message: 'Not authorized, user not authenticated' });
    }

    console.log('Verifying admin role:', req.user.role);
    const { role } = req.user; 
    if (role !== 'admin') {
        console.log('Access denied, user role:', role);
        return res.status(403).json({ message: 'Access denied' });
    }
    next();
}

module.exports = { protectAdmin, verifyAdmin };