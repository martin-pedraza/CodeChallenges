const notesService = require('../services/notesService');
const tagsService = require('../services/tagsService');
const jwtService = require('../services/jwtService');

const notesController = {
    getAll: async (req, res) => {
        const userId = jwtService.getUserFromToken(req.headers.authorization);
        const notes = await notesService.findAll(userId);
        return res.status(200).json({ notes });
    },
    getArchived: async (req, res) => {
        const userId = jwtService.getUserFromToken(req.headers.authorization);
        const notes = await notesService.findArchived(userId);
        return res.status(200).json({ notes });
    },
    getOne: async (req, res) => {
        const noteId = req.params.id;
        const note = await notesService.findByPk(noteId);
        return res.status(200).json({ note });
    },
    create: async (req, res) => {
        const data = req.body;
        const userId = jwtService.getUserFromToken(req.headers.authorization);
        const note = await notesService.create(data, userId);
        return res.status(200).json({ note });
    },
    update: async (req, res) => {
        const noteId = req.params.id;
        let note = await notesService.findByPk(noteId);
        const data = req.body;
        note = await notesService.update(noteId, data)
        return res.status(200).json({ note });
    },
    toggleArchived: async (req, res) => {
        const noteId = req.params.id;
        let note = await notesService.findByPk(noteId);
        note = await notesService.toggleArchived(note);
        return res.status(200).json({ note });
    },
    delete: async (req, res) => {
        const noteId = req.params.id;
        const note = await notesService.findByPk(noteId);
        try {
            await notesService.destroy(note);
            return res.status(200).json({ message: `Nota con id ${noteId} eliminada.` })
        } catch (error) {
            console.error('Error al intentar eliminar la nota:', error);
            return res.status(500).json({ error: 'Error interno al intentar eliminar la nota.' });
        }
    },
    toggleAssociation: async (req, res) => {
        const noteId = req.params.noteId;
        const tagId = req.params.tagId;
        try {
            const note = await notesService.findByPk(noteId);
            const tag = await tagsService.findByPk(tagId);
            if (!tag) {
                return res.status(404).json({ error: "Etiqueta no encontrada." });
            }
            const isAssociated = note.Etiqueta.some(noteTag => noteTag.id === tag.id);
            if (isAssociated) {
                await notesService.removeEtiqueta(note, tag);
                return res.status(200).json({ message: 'Nota desasociada de etiqueta correctamente.' });
            } else {
                await notesService.addEtiqueta(note, tag);
                return res.status(200).json({ message: 'Nota asociada a etiqueta correctamente.' });
            }
        } catch (error) {
            console.error('Error al cambiar la asociación de nota a etiqueta:', error);
            return res.status(500).json({ error: 'Error interno al cambiar la asociación de nota a etiqueta.' });
        }
    },
    getTags: async (req, res) => {
        const noteId = req.params.id;
        const note = await notesService.findByPk(noteId);
        const allTags = await tagsService.findAll();
        const tags = allTags.map(tag => {
            const isAssociated = note.Etiqueta.some(noteTag => noteTag.id == tag.id);
            return {
                ...tag.toJSON(), 
                estaAsociada: isAssociated
            };
        });
        return res.status(200).json({ tags });
    }
};

module.exports = notesController;