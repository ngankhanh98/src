var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', (req, res) => {
  res.redirect('http://localhost:3000/jobs');
});

module.exports = router;
