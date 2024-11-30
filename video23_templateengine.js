//template engine
//install ejs - embedded javascript
//dynamic routing//remove extension from url
//make n apply 404 page

const express = require('express');
const path = require('path');

const app = express();
const publicDirPath = path.join(__dirname, 'public');

console.log("publicDirPath", publicDirPath);

app.set('view engine', 'ejs');

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

app.get('/login', (req, res)=> {
    res.render('login');
})

app.get('/profile',(req, res)=> {
    const user = {
        name: 'Irfan',
        email: 'irfan@gmail.com',
        city: 'hyderabad',
        country: 'India',
        skills:['java','js','node','hibernate','spring', 'hibernate']
    }
    res.render('profile', {user});
})

app.get('/*',(req, res)=> {
    res.sendFile(`${publicDirPath}/404.html`);
})

app.listen(5000);