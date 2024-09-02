const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');


// const hashPassword = (password) => {
// 	let salt = bcrypt.genSaltSync(10);
// 	let hash = bcrypt.hashSync(password, salt);
// 	return hash;
// };

// const hashPassword = async (password) => {
//     try {
//         const salt = await bcrypt.genSalt(10);
//         return await bcrypt.hash(password, salt);
//     } catch (error) {
//         throw new Error('Hashing failed', error);
//     }

// }

const hashPassword = async (password) => {
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, salt);
  };

const verifyPassword = async (plainPassword, hashedPassword) => {
    try {
        return await bcrypt.compare(plainPassword, hashedPassword);
    } catch (error) {
        throw new Error('Password verification failed');
    }
};
const genToken = (payload, secret = JWT_SECRET) => {
	return jwt.sign(payload, secret);
};

const verifyToken = (token, secret = JWT_SECRET) => {
	return jwt.verify(token, secret);
};

module.exports = { hashPassword, verifyPassword, genToken, verifyToken };