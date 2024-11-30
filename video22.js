//remove extension from url
//make n apply 404 page

const express = require('express');
const path = require('path');

const app = express();
const publicDirPath = path.join(__dirname, 'public');

console.log("publicDirPath", publicDirPath);

// app.use(express.static(publicDirPath));

app.get('',(req, res)=> {
    res.sendFile(`${publicDirPath}/index.html`);
})

app.get('/about',(req, res)=> {
    res.sendFile(`${publicDirPath}/about.html`);
})

app.get('/home',(req, res)=> {
    res.sendFile(`${publicDirPath}/home.html`);
})

app.get('/*',(req, res)=> {
    res.sendFile(`${publicDirPath}/404.html`);
})

app.listen(5000);