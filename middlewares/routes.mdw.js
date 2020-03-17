module.exports = app => {
  var indexRouter = require("../routes/index");
  var jobsRouter = require("../routes/jobs.route");
  var companysRouter = require("../routes/companies.route");

  app.use("/", indexRouter);
  app.use("/jobs", jobsRouter);
  app.use("/companies", companysRouter);
};
