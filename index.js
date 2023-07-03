const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('<h1>Hello Express!</h1>')
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});

// CRUD
// create, read, update, delete
// POST, GET, PUT, DELETE

// create
app.post('/test', function (req, res) {
    res.send('Got a POST request');
});

// read
app.get('/test', function (req, res) {
    res.send('Hello Express!');
});

// update
app.put('/user', function (req, res) {
res.send('Got a PUT request at /user');
});

// delete
app.delete('/user', function (req, res) {
res.send('Got a DELETE request at /user');
});