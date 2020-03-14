const {
    db
} = require('../config/dbs');

module.exports.getKyNang = async () => {
    const data = await db.get('kynang').value();
    return data;
}