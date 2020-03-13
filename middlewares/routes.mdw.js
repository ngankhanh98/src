module.exports = (app) => {
  var indexRouter = require('../routes/index');
  var usersRouter = require('../routes/users');
  var jobsRouter = require('../routes/jobs.route');

  app.use('/', indexRouter);
  app.use('/users', usersRouter);
  app.use('/jobs', jobsRouter);
};
