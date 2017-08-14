var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  // res.send('respond with a resource');
  res.render('users', { 
    title: 'im user file',
    message: 'Hello there'
 });
});

module.exports = router;
