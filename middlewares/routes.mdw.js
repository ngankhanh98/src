module.exports = app => {
  var indexRouter = require("../routes/index");
  var usersRouter = require("../routes/users");
  var jobsRouter = require("../routes/jobs.route");
  var companysRouter = require("../routes/companies.route");

  app.use("/", indexRouter);
  app.use("/users", usersRouter);
  app.use("/jobs", jobsRouter);
  app.use("/companies", companysRouter);
};
