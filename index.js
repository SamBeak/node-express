const mysql = require('mysql2');

// Create the connection pool. The pool-specific settings are the defaults
const pool = mysql.createPool({
    host: "database-1.cjodkemt1oor.ap-northeast-1.rds.amazonaws.com",
    user: "admin",
    password: "adminadmin",
    port: 3306,
    database: "db_test",
  });


    //  db_test database 생성
    //  pool.query(`create database if not exists db_test`, function (err, results, fields) {
    //     console.log(results);
    //  });
    
    //  pool.query(`SHOW DATABASES`, function (err, results, fields) {
    //     console.log(results);
    //  });

    // db talbe 생성
    // pool.query(`create table notes(
    //   uuid BINARY(16) DEFAULT (UUID_TO_BIN(UUID())),
    //   title VARCHAR(255) NOT NULL,
    //   contents TEXT NOT NULL,
    //   created TIMESTAMP NOT NULL DEFAULT NOW()
    // );`, function (err, results, fields) {
    //   console.log(results);
    // });

    // db 내용 추가
    // pool.query(`insert into notes(title, contents) values('My First Note', 'A note about something'), ('My Second Note', 'A note about something else');`, function (err, results, fields) {
    //   console.log(results);
    // });

    // // db table 내용 조회
    // pool.query(`select * from notes`, function (err, results, fields) {
    //   console.log(results);
    // });

    // select 함수 만들기
    function getNotes(){
      // pool.query(`select * from notes`, function (err, results, fields) {
      //   console.log(results);
      // });
      pool.query(`select BIN_TO_UUID(uuid,true) as uuid,title,contents,created from notes`, function (err, results, fields) {
        console.log(results);
      });
    }

    // UUID 를 버퍼에서 바이너리로 바꾸기
    // pool.query(`select BIN_TO_UUID(uuid,true) as uuid,title,contents,created from notes`, function (err, results, fields) {
    //   console.log(results);
    // });

    // insert 함수 만들기
    function addNotes(title,contents){
      pool.query(`insert into notes(title, contents) values('${title}','${contents}');`, function (err, results, fields) {
        console.log(results);
      });
    };
    // addNotes('Dataç','Dataç');

    // update 함수 만들기
    function updateNotes(uuid,title,contents){
      pool.query(`update notes set title='${title}', contents='${contents}' where uuid=UUID_TO_BIN('${uuid}', 1);`, function (err, results, fields) {
        console.log(results);
      });
    }
    // updateNotes('2c5811ee-bd69-24ee-b729-0ac3b1522ed3','Data∂-updated','Data∂-updated');
    getNotes();