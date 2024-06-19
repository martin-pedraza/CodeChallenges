var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  return res.json({
    data: "El servidor está funcionando...",
    status: 200
  });
});

module.exports = router;