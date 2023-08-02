import mysql from "mysql2";

// Create the connection pool. The pool-specific settings are the defaults
const pool = mysql.createPool({
    host: "database-1.cjodkemt1oor.ap-northeast-1.rds.amazonaws.com",
    user: "admin",
    password: "adminadmin",
    port: 3306,
    database: "db_test",
  })
  .promise();

export async function getNotesAsync() {
  const [rows] = await pool.query(
    `SELECT BIN_TO_UUID(uuid, true) AS uuid,title,contents,created FROM notes;`
  );
  return rows;
}

export async function getNoteAsync(uuid) {
  const [rows] = await pool.query(
    `SELECT BIN_TO_UUID(uuid, true) AS uuid,title,contents,created FROM notes WHERE uuid=UUID_TO_BIN('${uuid}',1);`
  );
  return rows;
}
export async function addNotesAsync(title, contents) {
  const [rows] = await pool.query(
    `INSERT INTO notes (title, contents) VALUES ('${title}', '${contents}');`
  );
  return rows;
}
export async function updateNoteAsync(uuid, title, contents) {
  const [rows] = await pool.query(
    `UPDATE notes SET title = '${title}', contents= '${contents}' WHERE uuid = UUID_TO_BIN('${uuid}',1);`
  );
  return rows;
}
export async function deleteNoteAsync(uuid) {
  const [rows] = await pool.query(
    `DELETE FROM notes WHERE uuid=UUID_TO_BIN('${uuid}',1);`
  );
  return rows;
}
function getNotes() {
  pool.query(
    `SELECT BIN_TO_UUID(uuid, true) AS uuid,title,contents,created FROM notes;`,
    function (err, rows, fields) {
      console.log(rows);
    }
  );
}
function getNote(uuid) {
  pool.query(
    `SELECT BIN_TO_UUID(uuid, true) AS uuid,title,contents,created FROM notes WHERE uuid=UUID_TO_BIN('${uuid}',1);`,
    function (err, rows, fields) {
      console.log(rows);
    }
  );
}
function addNotes(title, contents) {
  pool.query(
    `INSERT INTO notes (title, contents) VALUES ('${title}', '${contents}');
`,
    function (err, rows, fields) {
      console.log(rows);
    }
  );
}
function updateNote(uuid, title, contents) {
  pool.query(
    `UPDATE notes SET title = '${title}', contents= '${contents}' WHERE uuid = UUID_TO_BIN('${uuid}',1);`,
    function (err, rows, fields) {
      console.log(rows);
    }
  );
}
function deleteNote(uuid) {
  pool.query(
    `DELETE FROM notes WHERE uuid=UUID_TO_BIN('${uuid}',1);`,
    function (err, rows, fields) {
      console.log(rows);
    }
  );
}
