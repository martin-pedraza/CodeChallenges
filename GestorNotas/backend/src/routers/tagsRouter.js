var express = require('express');
var router = express.Router();
const tagsController = require('../controllers/tagsController');
const authMiddleware = require('../middlewares/authMiddleware');

router.get('/', authMiddleware, tagsController.getAll);

router.get('/:id/notes', authMiddleware, tagsController.getNotesByTag);

router.get('/:id', authMiddleware, tagsController.getOne);

module.exports = router;
