const mysql = require('mysql2');

// Create the connection pool. The pool-specific settings are the defaults
const pool = mysql.createPool({
    host: "database-1.cjodkemt1oor.ap-northeast-1.rds.amazonaws.com",
    user: "admin",
    password: "adminadmin",
    port: 3306,
  });

//  pool.query(`CREATE DATABASE db_test`, function (err, results, fields) {
//     console.log(results);
//  });
 pool.query(`SHOW DATABASES`, function (err, results, fields) {
    console.log(results);
 });