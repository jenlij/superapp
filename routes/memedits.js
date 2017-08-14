var express = require('express');
var router = express.Router();
var db = require('../db');
/* GET users listing. */
router.get('/:id/edit', function(req, res, next) {
  // res.send('respond with a resource');
 db.one(`
  select * from cd.members where memid=${req.params.id};
  `)
  .then( (result) => {
  res.render('memedits', {
    member: result
  });
});
});

module.exports = router;
