const db = require('../database/models')

const usersService = {
    findByUsername: (username) => {
        return db.Usuario.findAll({
            where: { usuario : username }
        });
    },
};

module.exports = usersService;