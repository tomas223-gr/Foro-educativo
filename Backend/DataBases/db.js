const mysql = require('mysql2');

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',     
  password: '',      
  database: 'ed-proj' 
});


module.exports = pool.promise();;
