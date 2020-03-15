const { db } = require("../config/dbs");
var _ = require("underscore");

module.exports.getKyNang = async () => {
  const data = await db.get("kynang").value();
  return data;
};
module.exports.getCongViec = async () => {
  const data = await db.get("congviec").value();
  return data;
};

module.exports.filterCongViec = async filter => {
  const data = await db.get("congviec").value();
  // console.log(data[0].kyNangCan[0].ten);

  // console.log(filter);
  var result = data.filter(data => {
    console.log(data.kyNangCan);
    console.log(filter);
    if (data.kyNangCan == filter) {
      console.log(true);
      return data;
    }
  });
};
