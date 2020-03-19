var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', (req, res) => {
  res.redirect('https://csc13116-src.herokuapp.com/jobs');
});

module.exports = router;
