// npm init
// npm install express --save
// sudo npm install nodemon -g
// nodemon index.js

//nodemon은 Node.js 어플리케이션을 개발할 때 사용되는 도구다. 일반적으로 개발 중에 코드 변경을 감지하고 자동으로 서버를 다시 시작하여 개발 프로세스를 더 효율적으로 만들어준다.

const express = require('express')
const app = express()
const port = 3000
app.use(express.json()); // for parsing application/json 미들웨어를 넣어주는 것이다. json으로 받아올 수 있게 해준다.
app.use(express.urlencoded()); // for parsing application/x-www-form-urlencoded 미들웨어를 넣어주는 것이다. urlencoded로 받아올 수 있게 해준다.

app.get('/', (req, res) => {
    res.send('<h1>Hello Express!</h1>')
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});

const data = [
    {id:"id-1", name:"name-1", note:"note info 1"},
    {id:"id-2", name:"name-2", note:"note info 2"},
    {id:"id-3", name:"name-3", note:"note info 3"}
]

// CRUD
// create, read, update, delete
// POST, GET, PUT, DELETE
// C, R은 같은 URL을 사용한다.
// get과 같은 URL을 써도, create의 status는 201번이다. get은 200이다.

// create 
app.post('/notes', function (req, res) {
    console.log(req.body); // reqest한 것의 body를 받아온다.
    data.push(req.body); // data에 push한다.
    res.sendStatus('201'); // HTTP 201 Created 상태 코드는 서버가 성공적으로 요청을 처리하고 새로운 리소스를 생성했음을 의미, POST 요청이 정상적으로 처리되어 새로운 리소스가 생성되었다면, senStatus(201)을 사용해 클라이언트에게 201Created 상태 코드를 반환한다.
});

// read
app.get('/notes', function (req, res) {
    res.send(data);
});

// path parameter
app.get('/note/:noteId', (req, res) => { // :noteId는 params(변수)이다. :(세미콜론)은 패스 파라미터 표기법이다. note의 noteId를 받아온다. => http://localhost:3000/note/1 일 경우 noteId는 1이다.
    console.log(req.params); // reqest한 것의 params(변수)를 받아온다.
    const item = data.filter(item => item.id === req.params.noteId); // data의 id와 reqest한 것의 params(변수)의 id가 같은 것을 찾는다.
    res.send(item); // 찾은 것을 보낸다.
});

// query parameter
app.get('/note', (req, res) => { // ?(물음표)는 쿼리 파라미터의 표기법이다. ? 뒤에 원하는 데이터의 형식들을 표기한다. => http://localhost:3000/note?name=1&note=2 일 경우 query는 name=1&note=2이다.
    console.log(req.query); // reqest한 것의 query(변수)를 받아온다.
    const { id, name, note } = req.query; // reqest한 것의 query(변수)의 id, name, note를 받아온다.
    if(!id) res.send([]); // id가 없으면 [] 빈값을 보낸다.
    const item = data.filter((item) => item.id == id); // data의 id와 reqest한 것의 query(변수)의 id가 같은 것을 찾는다.
    res.send(item);
});

// update
app.put('/user', function (req, res) {
res.send('Got a PUT request at /user');
});

// delete
app.delete('/user', function (req, res) {
res.send('Got a DELETE request at /user');
});