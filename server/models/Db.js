const mysql = require('mysql');
const connection = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'abcd',
  database: 'ub'
//  port: '/var/run/mysqld/mysqld.sock'
});

module.exports=connection;
