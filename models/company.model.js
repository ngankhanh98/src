const db = require("../utils/db");

module.exports = {
  all: () => db.all("companies"),
  get: condition => db.get("companies", condition)
};
