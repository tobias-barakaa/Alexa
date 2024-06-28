const jwt = require('jsonwebtoken');
const knex = require('../db/db');

// Protect routes
const protect = async (req, res, next) => {
    let token;
    token = req.cookies.jwt;
    if (token) {
        try {
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            req.user = await knex('users')
                .select('id', 'username', 'email', 'profile_pic', 'bio', 'is_admin', 'created_at', 'updated_at')
                .where({ id: decoded.id })
                .first();

            next();
        } catch (error) {
            res.status(401).json({ message: 'Not authorized, token failed' });
        }
    } else {
        res.status(401).json({ message: 'Not authorized, no token' });
    }
};

// Admin middleware
const admin = (req, res, next) => {
    if(req.user && req.user.is_admin) {
        next();
    } else {
        res.status(401).json({ message: 'Not authorized as an admin' });
    }
}

module.exports = { protect, admin };



const express = require('express');
const knex = require('../db/knex'); // Adjust the path as necessary

// Middleware to verify admin
const verifyAdmin = (req, res, next) => {
    const { role } = req.user; // Assuming req.user contains the authenticated user's details
    if (role !== 'admin') {
        return res.status(403).json({ message: 'Access denied' });
    }
    next();
};

// Route to manually insert an admin (to be used sparingly)
const addAdmin = async (req, res) => {
    const { first_name, last_name, username, email, password } = req.body;

    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const [newAdmin] = await knex('users')
            .insert({
                first_name,
                last_name,
                username,
                email,
                password: hashedPassword,
                role: 'admin', // Setting role to admin
                profile_pic_url: `https://avatar.iran.liara.run/username?username=${first_name}${last_name}`
            })
            .returning('*');

        res.status(201).json(newAdmin);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'An error occurred while adding the admin' });
    }
};

const router = express.Router();
router.post('/admin/add', verifyAdmin, addAdmin);

module.exports = router;
