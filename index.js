const express = require('express');
const app = express();

app.get('/', (req, res)=>{
    res.send('We are live')
});
app.post('/', (req,res)=>{
    const agent =
})
app.listen(3333, ()=>console.log('server is running at port 3333 '));