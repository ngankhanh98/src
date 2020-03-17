const db = require("../utils/db");

module.exports = {
  all: () => db.all("users"),
  get: condition => db.get("users", condition)
};
