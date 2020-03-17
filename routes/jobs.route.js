var express = require('express');
var router = express.Router();

const jobModel = require('../models/job.model');

/* GET list of jobs. */
router.get('/', async (req, res, next) => {
  const rows = await jobModel.all();

  res.render('vwJobs/index', {
    jobs: rows,
    empty: rows.length == 0
  });
});

/* GET job detail. */
router.get('/:id', async (req, res, next) => {
  const entity = { id: +req.params.id };
  const row = jobModel.get(entity);

  res.render('vwJobs/detail', {
    job: row,
    empty: row === undefined
  });
});

module.exports = router;
