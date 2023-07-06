const express = require('express'); // express를 불러온다.
const app = express(); // express를 실행.

// 임시 데이터
const data = [
    {id:"id-1", name:"name-1", note:"note info 1"},
    {id:"id-2", name:"name-2", note:"note info 2"},
    {id:"id-3", name:"name-3", note:"note info 3"}
]

// path parameter
app.get('/user/:userId', (req, res) => {
    console.log(req.params);
    const item = data.find(item => item.id == req.params.userId);
    res.send(item);
});