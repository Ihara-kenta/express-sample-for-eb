const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  const options = {title: 'Express', name: "Ihara Kenta"};
  res.render('index', options);
});

module.exports = router;
