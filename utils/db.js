const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');

const adapter = new FileSync('db/jobs.json');
const db = low(adapter);

module.exports = {
  all: tableName => db.get(tableName).value(),
  get: (tableName, condition) => db.get(tableName).find(condition).value()
};
