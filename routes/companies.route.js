var express = require("express");
var router = express.Router();

const shortid = require("shortid");
const companyModel = require("../models/company.model");
const jobModel = require("../models/job.model");

router.get("/:id", async (req, res, next) => {
  const id = +req.params.id;
  const entity = { id };
  console.log(entity);
  let company = await companyModel.get(entity);
  res.render("vwCompanies/home", {
    layout: "boostrapLayout",
    title: company.name,
    id
  });
});

router.get("/:id/post", async (req, res, next) => {
  const id = +req.params.id;
  const entity = { id };
  let company = await companyModel.get(entity);

  res.render("vwJobs/form", {
    layout: "boostrapLayout",
    title: `${company.name} post`,
    extra:
      '<link rel="stylesheet" href="//code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css">',
    script:
      '<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js"></script>' +
      '<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js"></script>' +
      '<script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>'
  });
});

router.post("/:id/post", async (req, res, next) => {
  const id = +req.params.id;
  req.body["id"] = shortid.generate();
  req.body["company"] = companyModel.get({ id }).name;
  jobModel.add(req.body);
});

module.exports = router;
