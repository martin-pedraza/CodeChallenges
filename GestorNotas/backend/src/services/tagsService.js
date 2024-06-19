const db = require('../database/models')

const tagsService = {
    findAll: () => {
        return db.Etiqueta.findAll();
    },
    findByPk: (id) => {
        return db.Etiqueta.findByPk(id);
    },
    getNotas: (tag) => {
        return tag.getNota();
    },
};

module.exports = tagsService;