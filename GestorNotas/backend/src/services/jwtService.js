const jwt = require('jsonwebtoken');
require('dotenv').config();

const jwtService = {
    generateToken: (userId) => {
        return jwt.sign({ id: userId }, process.env.JWTKEY, { expiresIn: '1h' });
    },
    verifyToken: (token) => {
        try {
            const tokenWithoutBearer = token.replace(/^Bearer\s/, '');
            return jwt.verify(tokenWithoutBearer, process.env.JWTKEY);
        } catch (err) {
            return null;
        }
    },
    getUserFromToken: (token) => {
        const tokenWithoutBearer = token.replace(/^Bearer\s/, '');
        const decodedToken = jwtService.verifyToken(tokenWithoutBearer);
        return decodedToken.id;
    }
};

module.exports = jwtService;