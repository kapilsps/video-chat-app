const express = require('express');
const router = express.Router();
const { v4: uuidV4 } = require('uuid');

/* GET home page. */
router.get('/', function(req, res, next) {
  // res.render('index', { title: 'Express' });
  res.redirect(`/${uuidV4()}`);
});


router.get('/:room', (req, res, next) => {
  res.render('room', {
    roomId: req.params.room
  });
});

module.exports = router;
