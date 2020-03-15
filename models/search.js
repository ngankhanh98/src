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

module.exports.filterCongViec = async (filter) => {
  const data = await db.get("congviec").value();
  // let t = JSON.stringify(filter); 
  // console.log(`filter: ${t}`);

  // danh sach TEN ky nang cua cong viec
  var dskynang = _.map(data, "kyNangCan");
  var tenkynang = _.map(dskynang, function(each){
    return _.map(each, "ten");
  });
  console.log(`congviec: ${JSON.stringify(tenkynang)}`);
  // tenkynang = [ [ 'Cloud Security' ], [ 'Cloud Security', 'Real-time Monitoring' ] ]

  // danh sach TEN ky nang cua ung vien
  var filter_ten = _.map(filter, "ten");
  console.log(`ungvien: ${JSON.stringify(filter_ten)}`);
  
  // filter
  // B1. filter ten
  // B2. filter trinh do
  //var result = 
};
