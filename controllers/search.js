const search = require("../models/search");

exports.home = async (req, res) => {
  kynang = await search.getKyNang();
  res.render("search", {
    title: "Search",
    kynang
  });
};

exports.filter = async (req, res, next) => {
  var obj = req.body["KyNang"];
  const re = /\s*(?:;|:)\s*/;
  obj = obj.split(re);
  //console.log(obj);
  var arr = [];
  var e = {};

  for (let index = 0; index < obj.length - 1; index++) {
    const element = obj[index];
    if (element && index % 2 == 0) {
      e.ten = element;
    } else {
      if (element.includes("Nghiệp dư")) e.trinhdo = 1;
      else if (element.includes("Có kinh nghiệm")) e.trinhdo = 2;
      else e.trinhdo = 3;
      //console.log(`e: ${e.ten} ${e.trinhdo}`);
      arr.push({ ten: e.ten, trinhdo: e.trinhdo });
    }
  }
  console.log(arr);

  congviec = await search.filterCongViec(arr);
  // console.log(congviec);
  res.render("error");
};
