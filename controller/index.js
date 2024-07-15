const sql = require('../connection/sqlpool');
module.exports.handleGetFav = async (req, res) => {
  sql.query('SELECT * FROM favorites', (err, results) => {
    if (err) throw err;
    res.json(results);
  });
}

module.exports.handleSunbmitData = async (req, res) => {
  const { name, state_province, web_page } = req.body;
  const Query = 'INSERT INTO favorites (name, state_province, web_page) VALUES (?, ?, ?)';
  sql.query(Query, [name, state_province, web_page], (err, result) => {
    if (err) throw err;
    res.send('Favorite added!');
  });
}