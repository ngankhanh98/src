const db = require("../utils/db");

module.exports = {
  all: () => db.all("jobs"),
  get: condition => db.get("jobs", condition),
  add: value => db.add("jobs", value),
  filter: condition => db.filter("jobs", condition)
};
