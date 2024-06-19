const notesService = require('../services/notesService');
const jwtService = require('../services/jwtService');

const authorMiddleware = async (req, res, next) => {
    const noteId = req.params.id || req.params.noteId;
    const userId = jwtService.getUserFromToken(req.headers.authorization);
    const note = await notesService.findByPk(noteId);
    if (!note) {
        return res.status(404).json({ error: 'Nota no encontrada.' });
    }
    if (note.usuarioId != userId) {
        return res.status(403).json({ error: 'Acceso no autorizado a la nota.' });
    }
    next();
};

module.exports = authorMiddleware;
