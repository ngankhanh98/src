const { db } = require("../config/dbs");
var _ = require("lodash");

module.exports.getKyNang = async () => {
  const data = await db.get("kynang").value();
  return data;
};

module.exports.getCongViec = async () => {
  const data = await db.get("congviec").value();
  return data;
};
