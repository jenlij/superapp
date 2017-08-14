var express = require('express');
var router = express.Router();
var db = require('../db');
//shows all users
router.get('/', function(req, res, next) {
 db.query(`
  select * from cd.members where memid > 0 order by surname, firstname;
  `)
  .then( (result) => {
  res.render('users', {
    members: result
  });
});
});


//shows all info for a single user
router.get('/:id', function(req, res, next) {
 db.one(`
  select * from cd.members where memid=${req.params.id};
  `)
  .then( (result) => {
  res.render('member', {
    member: result
  });
});
});

router.get('/:id/edit', function(req, res, next) {
  db.one(`
    select * from cd.members where memid=${req.params.id};
  `).then( (result) => {
    res.render('memedits', {
      member: result
    });
  });
});


router.post('/:id/edit', function(req, res, next) {
  var mems = req.body;
  mems['memid'] = req.params.id;
  var surname = req.body.surname;
  var firstname = req.body.firstname;
  var address = req.body.address;
  var zipcode = req.body.zipcode;
  var telephone = req.body.telephone;
  // var memid = req.params.id;
  db.result(`
    update cd.members
      set
        surname='${surname}',
        firstname='${firstname}',
        address='${address}',
        zipcode='${zipcode}',
        telephone='${telephone}'
      where memid=${mems['memid']};
  `).then((result) => {
      res.render('memedits', {  
      member: mems
    });
  }).catch((Error) => {
    console.log(Error)
  })
});

module.exports = router;
