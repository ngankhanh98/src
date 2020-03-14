const db = require('../utils/db');

module.exports = {
  all: () => db.all('jobs'),
  get: condition => db.get('jobs', condition)
};
