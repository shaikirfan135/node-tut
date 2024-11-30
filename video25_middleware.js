//middleware - how/what/types

//Types of MiddleWare - Application level, Router level, error handling, built-in and third party


const express = require('express');
const reqFilter = require('./middleware')
const app = express();
const route = express.Router();

//application level middleware 
// const reqFilter = (req, res, next) => {
//     console.log('reqFilter');
//     if(!req.query.age) {
//         res.send('Please Provide Age');
//     } else if(req.query.age < 18) {
//         res.send('You cannot access this page');
//     } else {
//         next();
//     }
// }

//if we want to apply on all the requests then use below line.
// app.use(reqFilter);

//for specific req
route.use(reqFilter);

app.get('/', reqFilter, (req, res) => {
    res.send(`Welcome to Home Page`);
})

app.get('/users', reqFilter, (req, res)=> {
    res.send(`Welcome to Users Page`);
})

app.get('/home', (req, res)=> {
    res.send(`Welcome to Home Page`);
})

app.get('/about', (req, res)=> {
    res.send(`Welcome to About Page`);
})

route.get('/contact', (req, res)=> {
    res.send(`Welcome to Contact Page`);
})

route.get('/address', (req, res)=> {
    res.send(`Welcome to Address Page`);
})

app.use('/', route);

app.listen(5000);