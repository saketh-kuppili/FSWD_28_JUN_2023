var express = require('express');
var router = express.Router();   // create router 
 
const createUser = function (req, res) {
  res.send('<h1>Admin Operations - Creating New User</h1>');
};


router.get('/', function(req, res) {
  res.send('<h1>Admin Operations </h1>');
});

router.get('/create', createUser);

module.exports = router;
