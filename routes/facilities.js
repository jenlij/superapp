var express = require('express');
var router = express.Router();
const db = require('../db');

/* http://localhost:3000/facilities/6 */
router.get('/:id', function(req, res, next) {
  db.one(`select * from cd.facilities where facid=${req.params.id};`)
  .then((result) => {
      res.render('facilities', {
        facility: result
      });
  });
});

module.exports = router;
