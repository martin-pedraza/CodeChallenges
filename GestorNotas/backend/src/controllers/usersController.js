const usersService = require('../services/usersService');
const jwtService = require('../services/jwtService');

const usersController = {
    login: async (req, res) => {
        const { usuario, clave } = req.body;
        const user = await usersService.findByUsername(usuario)
        if (!user) {
            return res.status(404).json({ error: "Usuario no encontrado." });
        }
        if (clave != user[0].dataValues.clave) {
            return res.status(401).json({ error: "Usuario no autorizado." });
        }
        const token = jwtService.generateToken(user[0].dataValues.id);
        return res.status(200).json({ success: true, token: token, message: "Inicio de sesión exitoso." });
    },
};

module.exports = usersController;