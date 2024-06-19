var express = require('express');
var router = express.Router();
const notesController = require('../controllers/notesController');
const authMiddleware = require('../middlewares/authMiddleware');
const authorMiddleware = require('../middlewares/authorMiddleware');

router.get('/archived', authMiddleware, notesController.getArchived);

router.get('/:id/tags', authMiddleware, authorMiddleware, notesController.getTags);

router.get('/:id', authMiddleware, authorMiddleware, notesController.getOne);

router.get('/', authMiddleware, notesController.getAll);

router.put('/:id/toggle-archived', authMiddleware, authorMiddleware, notesController.toggleArchived);

router.put('/:id', authMiddleware, authorMiddleware, notesController.update);

router.put('/:noteId/tags/:tagId/toggle-association', authMiddleware, authorMiddleware, notesController.toggleAssociation);

router.post('/', authMiddleware, notesController.create);

router.delete('/:id', authMiddleware, authorMiddleware, notesController.delete);


module.exports = router;
