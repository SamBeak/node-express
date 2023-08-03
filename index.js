import pkg from "pg";
const { Pool } = pkg;

const pool = new Pool({
    host: "database-2.cjodkemt1oor.ap-northeast-1.rds.amazonaws.com",
    user: "postgres",
    port: 5432,
    password : "adminadmin"
});

const client = await pool.connect();
const res = await client.query('SELECT NOW()');
console.log(res.rows);
client.release();