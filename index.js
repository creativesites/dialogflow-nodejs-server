const express = require('express');
const app = express();
const dff = require('dialogflow-fulfillment');

app.get('/', (req, res)=>{
    res.send('We are live')
});
app.post('/', (req,res)=>{
    const agent = new dff.WebhookClient({
        request: req,
        response: res
    });
})
app.listen(3333, ()=>console.log('server is running at port 3333 '));