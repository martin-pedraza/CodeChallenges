const tagsService = require('../services/tagsService');
const jwtService = require('../services/jwtService');

const tagsController = {
    getAll: async (req, res) => {
        const tags = await tagsService.findAll();
        return res.status(200).json({ tags });
    },
    getOne: async (req, res) => {
        const tagId = req.params.id;
        const tag = await tagsService.findByPk(tagId);
        if (!tag) {
            return res.status(404).json({ error: 'Etiqueta no encontrada.' });
        }
        return res.status(200).json({ tag });
    },
    getNotesByTag: async (req, res) => {
        const tagId = req.params.id;
        const tag = await tagsService.findByPk(tagId);
        if (!tag) {
            return res.status(404).json({ error: 'Etiqueta no encontrada.' });
        }
        let notes = await tagsService.getNotas(tag);
        const userId = jwtService.getUserFromToken(req.headers.authorization);
        notes = notes.filter(note => note.usuarioId == userId);
        return res.status(200).json({ notes });
    },
};

module.exports = tagsController;