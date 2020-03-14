var express = require('express');
var router = express.Router();
const fs = require('fs');

/* GET home page. */
router.get('/', function(req, res, next) {
  fs.readFile('kynang.json', (err, data) => {
    if (err) throw err;
    let dt = JSON.parse(data);
    dt = dt.kynang;
    res.render('search', { title: 'Search', kynang: dt });
    console.log(dt)
});
});

module.exports = router;
