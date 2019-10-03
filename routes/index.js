var express = require('express');
var router = express.Router();
var fs = require('fs');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});
router.get('/download', function(req, res, next) {
  const file = `${__dirname}/../public/download/${req.query.song}.${req.query.format}`;
  res.download(file);
});


module.exports = router;
