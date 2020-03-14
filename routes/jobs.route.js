var express = require('express');
var router = express.Router();


/* Use `LowDB` for working with JSON files  */
const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');

const adapter = new FileSync('db/jobs.json');
const db = low(adapter);


/* GET list of jobs. */
router.get('/', function (req, res, next) {
  const jobs = db.get('jobs')
    .value();

  res.render('vwJobs/index', {
    jobs,
    empty: jobs.length == 0
  });
});

/* GET job detail. */
router.get('/:id', function (req, res, next) {
  const job = db.get('jobs')
    .find({ id: +req.params.id })
    .value();

  res.render('vwJobs/detail', {
    job,
    empty: job === undefined
  });
});

module.exports = router;
