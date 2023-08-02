import express from "express";
import { getNotesAsync, getNoteAsync, addNotesAsync, updateNoteAsync, deleteNoteAsync } from "./database2.js";

const app = express()
const port = 3000

// body 처리를 위한 미들웨어 설정
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/notes', async (req, res) => {
  const result = await getNotesAsync();
  res.send(result);
});

app.get('/note/:id', async (req, res, next) => {
  try{
    const id = req.params.id;
    if(!id) throw new Error('400@No Path Parameter');
    const result = await getNoteAsync(id);
    if(!result) res.send({});
    if(result.length === 0) res.send({});
    res.send(result[0]);
  }
  catch(err){
    next(err);
  }
});

app.get('/notes', async (req, res, next) => {
  const {title, contents} = req.body;
  if(!title) sendStatus(400);
  if(!contents) sendStatus(400);
  const result = await addNotesAsync(title, contents);
  if(result?.affectedRows) throw new Error(`400@Not created`); // result.affectedRows가 undefined이면 에러를 던진다.
  if(typeof result.affectedRows !== 1) throw new Error(`400@Not created`);
  res.sendStatus(201);
});

app.use((err, req, res, next) => {
  console.log(err.stack);
  res.status(500).send('Something broke!');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});