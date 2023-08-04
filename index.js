import pkg from "pg";
const { Pool } = pkg;

const pool = new Pool({
    host: "database-2.cjodkemt1oor.ap-northeast-1.rds.amazonaws.com",
    user: "postgres",
    port: 5432,
    password : "adminadmin",
    database: "db_test"
});

// const client = await pool.connect();

const res = await client.query(
    `CREATE DATABASE db_test WITH ENCODING = 'UTF-8';`
    );

const res2 = await client.query(
    `CREATE TABLE notes(
        "uuid" UUID DEFAULT gen_random_uuid(),
        title VARCHAR NOT NULL,
        contents TEXT NOT NULL,
        created TIMESTAMP DEFAULT NOW(),
        PRIMARY KEY ("uuid")
        );`
);

const res3 = await.client.query(
    `INSERT notes (title, contents) VALUES ('My First Note', 'A note about something'), ('My Second Note', 'A note about something else');`    
);

async function getNotes(){
    const client = await pool.connect();
    const res4 = await client.query(
        `SELECT * FROM notes;`
    );
    return res4.rows;
    client.release();
};

// await getNotes();

async function getNote(id){
    const client = await pool.connect();
    const res5 = await client.query(
        `SELECT * FROM notes WHERE uuid = '${id}';`
    );
    return res5.rows;
    client.release();
};

// await getNote();

async function addNotes(title, contents){
    const client = await pool.connect();
    const res6 = await client.query(
        `INSERT INTO notes (title, contents) VALUES ('${title}', '${contents}');`
    );
    return res6.rows;
    client.release();
};

// await addNotes();

async function updateNotes(id, title, contents){
    const client = await pool.connect();
    const res7 = await client.query(
        `UPDATE notes SET title = '${title}' AND contents = '${contents}' WHERE uuid = '${id}';`
    );
    return res7.rows;
    client.release();
};

// await updateNotes();

async function deleteNotes(id){
    const client = await pool.connect();
    const res8 = await client.query(
        `DELETE FROM notes WHERE uuid = '${id}';`
    );
    return res8.rows;
    client.release();
};

async deleteNotes();