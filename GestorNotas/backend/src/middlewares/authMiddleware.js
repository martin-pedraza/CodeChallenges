const jwtService = require('../services/jwtService');

const authMiddleware = (req, res, next) => {
    const token = req.headers.authorization;
    if (!token) {
        return res.status(401).json({ error: 'Acceso no autorizado. Debes iniciar sesión.' });
    }
    const decodedToken = jwtService.verifyToken(token);
    if (!decodedToken) {
        return res.status(401).json({ error: 'Token inválido o expirado.' });
    }
    req.userId = decodedToken.id;
    next();
};
module.exports = authMiddleware;