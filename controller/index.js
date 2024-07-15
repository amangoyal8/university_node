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
module.exports.handleRemoveFav = async (req, res) => {
  const { id } = req.query;
  const que = 'DELETE FROM favorites WHERE id = ?';
  sql.query(que, [id], (err, result) => {
    if (err) throw err;
    res.send('Favorite removed!');
  });
}