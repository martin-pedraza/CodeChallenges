var express = require('express');
var router = express.Router();
const usersController = require('../controllers/usersController')

router.post('/login', usersController.login);

module.exports = router;
