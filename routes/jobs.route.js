var express = require("express");
var router = express.Router();

const jobModel = require("../models/job.model");

/* GET list of jobs. */
router.get("/", async (req, res, next) => {
  const jobs = await jobModel.all();

  if (!isNaN(jobs[0].skills[0].level)) {
    for (let index = 0; index < jobs.length; index++) {
      for (let index2 = 0; index2 < jobs[index].skills.length; index2++) {
        let temp = jobs[index].skills[index2].level;
        let text = "None";
        switch (temp) {
          case 1:
            text = "Nghiệp dư";
            break;
          case 2:
            text = "Có kinh ngiệm";
            break;
          case 3:
            text = "Chuyên nghiệp";
          default:
            break;
        }
        jobs[index].skills[index2].level = text;
      }
    }
  }

  res.render("vwJobs/index", {
    layout: "bootstrapLayout",
    title: 'Danh sách các tin tuyển dụng',
    jobs,
    extra: '<link href="/stylesheets/jobIndex.css" rel="stylesheet" />'
  });
});

/* GET job detail. */
router.get("/:id", async (req, res, next) => {
  const entity = { id: +req.params.id };
  const row = jobModel.get(entity);

  res.render("vwJobs/detail", {
    job: row,
    title: row.name,
    empty: row === undefined
  });
});

module.exports = router;
