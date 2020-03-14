var express = require('express');
var router = express.Router();


/* Use `LowDB` for working with JSON files  */
const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');

const adapter = new FileSync('db/jobs.json');
const db = low(adapter);


/* GET job detail. */
router.get('/:id', function (req, res, next) {
  const job = db.get('jobs')
    .find({ id: +req.params.id })
    .value();

  res.render('vwJobs/detail', {
    job,

    skills: job.skills,
    empty: job.skills.length === 0
  });
});

module.exports = router;
