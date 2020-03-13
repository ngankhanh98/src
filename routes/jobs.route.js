var express = require('express');
var router = express.Router();

/* GET job detail. */
router.get('/1', function (req, res, next) {
  const job = {
    id: 1,
    name: 'Java Software Engineer - JD85',
    description: 'Tham gia chương trình Đào tạo nhân viên mới: Đào tạo chuyên sâu, tổng thời gian đào tạo là 2 tháng để chuẩn bị các kiến thức và hoàn thiện kỹ năng trước khi tham gia vào dự án, với các nội dung bao gồm: kiến thức về Database, Lập trình hướng đối tượng, quy trình phát triển phần mềm, quản lý rủi ro…',
    company: 'Toshiba',
    location: 'Ho Chi Minh',
    type: 'Product',
    salary: 1000,
    expiration: '2020-03-20 23:59:59 +07:00',
    skills: [
      { name: 'Java', level: 3 },
      { name: 'HTML', level: 1 },
      { name: 'CSS', level: 1 },
      { name: 'MySQL', level: 2 },
      { name: 'MongoDB', level: 0 },
    ],
    slots: 70,
    benifits: 'salary review every year'
  };

  res.render('vwJobs/detail', {
    job,

    skills: job.skills,
    empty: job.skills.length === 0
  });
});

module.exports = router;
