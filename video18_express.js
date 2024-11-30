const express = require('express');
const app = express();

app.get('', (req, res)=> {
    console.log("data received in request : ", req.query.name);
    res.send(`<h1>Hello, this is default page!</h1><a href="/about?name=${req.query.name}"> Go to Help!</a>`);
});

app.get('/about', (req, res)=> {
    var msg = '';
    msg = `This is about us page!<br/>
    <input type="text" placeholder="User name" name="name" value="${req.query.name}"/>
    <button>Click Me</button><br/>
    <a href="/help"> Go to Help!</a>
    `;
    res.send(msg);
});

app.get('/help', (req, res)=> {
    console.log("data received in request : ", req.query.name);
    // res.send('This is help page!');
    res.send(`[
        {
            name: 'Irfan',
            email: 'irfan@gmail.com'
        },
        {
            name: 'uzma',
            email: 'uzma@gmail.com'
        }
    ]<br/>
<a href="/?name=Shaik Irfan"> Go to Home!</a>`);
});

app.listen(5000);