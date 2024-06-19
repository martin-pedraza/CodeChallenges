const db = require('../database/models')

const notesService = {
    findAll: (userId) => {
        return db.Nota.findAll({
            where: { estaArchivada: false, usuarioId: userId }
        });
    },
    findArchived: (userId) => {
        return db.Nota.findAll({
            where: { estaArchivada : true, usuarioId: userId }
        });
    },
    findByPk: (id) => {
        return db.Nota.findByPk(id, {
            include: [db.Etiqueta]
        });
    },
    create: (data, userId) => {
        return db.Nota.create({
            texto: data.texto,
            estaArchivada: false,
            usuarioId: parseInt(userId)
        });
    },
    update: async (noteId, data) => {
        await db.Nota.update(data, {
            where: { id: noteId }
        });
        return db.Nota.findByPk(noteId);
    },
    destroy: (note) => {
        return note.destroy();
    },
    addEtiqueta: (note, tag) => {
        return note.addEtiqueta(tag);
    },
    toggleArchived: (note) => {
        note.estaArchivada = !note.estaArchivada;
        return note.save();
    },
    removeEtiqueta: (note, tag) => {
        return note.removeEtiqueta(tag);
    }
};

module.exports = notesService;