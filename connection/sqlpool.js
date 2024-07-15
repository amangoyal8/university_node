
const mysql = require('mysql');

const pool = mysql.createPool({
  connectionLimit: 10,
  Server: "127.0.0.1",
  user: 'root',
  password: '',
  database: 'slashhash_db'
});

module.exports = pool;
