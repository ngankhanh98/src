const search = require('../models/search');

exports.home = async (req, res) => {
    kynang = await search.getKyNang();
    res.render('search', {
        title: 'Search',
        kynang
    });
}