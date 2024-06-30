const knex = require("../../db/db.js");

async function writerProtect(req, res, next) {
    const userId = req.user.id; 

    try {
        
        const roles = await knex('users')
        .join('roles', 'users.role_id', 'roles.id')
        .where('users.id', userId)
        .andWhere('roles.name', 'writers')
        .select('roles.name');
        if (roles.length > 0) {
            next();
        } else {
            
            return res.status(403).json({ message: 'Unauthorized: User does not have writer role' });
        }
    } catch (error) {
        console.error('Error checking writer role:', error);
        return res.status(500).json({ message: 'Internal Server Error' });
    }
}

module.exports = { writerProtect };
