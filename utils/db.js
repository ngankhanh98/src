const low = require("lowdb");
const FileSync = require("lowdb/adapters/FileSync");

const adapter = new FileSync("db/jobs.json");
const db = low(adapter);

module.exports = {
  all: tableName => db.get(tableName).value(),
  get: (tableName, condition) =>
    db
      .get(tableName)
      .find(condition)
      .value(),
  add: (tableName, value) =>
    db
      .get(tableName)
      .push(value)
      .write(),
  filter: (tableName, condition) =>
    db
      .get(tableName)
      .filter(condition)
      .value()
};
