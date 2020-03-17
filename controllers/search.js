const searchModel = require("../models/search.model");

exports.home = async (req, res) => {
  kynang = await searchModel.getKyNang();
  res.render("search", {
    title: "Search",
    kynang
  });
};

exports.result = async (req, res) => {
  let result = [];

  // Tạo mảng gồm các skill được gửi xuống từ view
  let obj = req.body.KyNang;
  obj = obj.split(',');
  let skills = [];
  obj.map(i => {
    if (i !== ' ') {
      const newStr = i.trim();
      skills.push(newStr);
    }
  });
  // =============================================

  // Ứng với mỗi congviec tạo ra 1 mảng các kỹ năng cần thiết đối (cấu trúc giống với mảng skills)
  let congviec = await searchModel.getCongViec();
  for (let i = 0; i < congviec.length; i++) {
    let arrKyNangCan = [];
    congviec[i].kyNangCan.map(j => {
      arrKyNangCan.push(j.ten + ' / ' + j.trinhdo);
    });
    congviec[i].arrKyNangCan = arrKyNangCan;
  }
  // =============================================

  // So sánh 2 mảng đó, nếu giống nhau thì push vào result
  for (let i = 0; i < congviec.length; i++) {
    let count = 0;
    skills.map(j => {
      if (congviec[i].arrKyNangCan.includes(j)) {
        count++;
      }
    });
    if (count === skills.length) {
      let count1 = 0;
      congviec[i].arrKyNangCan.map(j => {
        if (skills.includes(j)) {
          count1++;
        }
      });
      if (count1 == congviec[i].arrKyNangCan.length) {
        result.push(congviec[i]);
      }
    }
  }
  // ============================================

  kynang = await searchModel.getKyNang();
  res.render("search", {
    title: "Search",
    search: result,
    kynang
  });
};
