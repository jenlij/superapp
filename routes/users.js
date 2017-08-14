var express = require('express');
var router = express.Router();
var db = require('../db');
/* GET users listing. */
router.get('/', function(req, res, next) {
  // res.send('respond with a resource');
 db.query(`
  select * from cd.members order by surname, firstname;
  `)
  .then( (result) => {
  res.render('users', {
    members: result
  });
});
});

module.exports = router;
