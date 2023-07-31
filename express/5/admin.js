var express = require('express');
var router = express.Router();
 
router.get('/', function(req, res) {
  res.send('<h1>Admin Operations </h1>');
});

router.get('/create', function (req, res) {
  res.send('<h1>Admin Operations - Create New User</h1>');
});

module.exports = router;
