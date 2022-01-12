var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/did/', function(req, res, next) {
  res.send('You did it!');
});

module.exports = router;
