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
  obj = obj.split(" / ");
 
  var arr = [];
  var e = new Object();
  
  for (let index = 0; index < obj.length; index++) {
    const element = obj[index];
    if(index%2==0)
    {
      e.ten = element;
    }
    else 
    {
      if(element.includes("Nghiệp dư")) e.trinhdo = 1;
      else if(element.includes("Có kinh nghiệm")) e.trinhdo=2;
      else e.trinhdo=3;
    
      arr.push(e);
    }   
  }


  congviec = await search.filterCongViec(arr);
  // console.log(congviec);
  res.render("index", { title: arr });
};
