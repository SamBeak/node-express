const express = require('express');
const app = express();

// 임시 데이터
const data = [
    {id:"id-1", name:"name-1", note:"note info 1"},
    {id:"id-2", name:"name-2", note:"note info 2"},
    {id:"id-3", name:"name-3", note:"note info 3"}
]

// query parameter
app.get('/user', (req, res) => {
    console.log(req.query);
    const {id, name, not} = req.query;
    if(!id) res.send([]);
    const item = data.find(item => item.id == id);
    res.send(item);
});