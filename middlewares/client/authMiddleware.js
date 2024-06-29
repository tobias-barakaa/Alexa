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
module.exports = { protect };

const router = express.Router();
router.post('/admin/add', verifyAdmin, addAdmin);

module.exports = router;
