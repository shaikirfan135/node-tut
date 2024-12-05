//https://www.npmjs.com/package/mysql - old not working with authencation issues
//https://www.npmjs.com/package/mysql2
//https://stackoverflow.com/questions/50093144/mysql-8-0-client-does-not-support-authentication-protocol-requested-by-server

const mysql = require('mysql2');
const express = require('express');

const conn = mysql.createConnection({
    host: 'localhost',
    user:'root',
    password: 'hafsa',
    database: 'cts'
});

conn.connect((err) => {
    if(err) {
        
        console.error('connection error ', err);
    } else {
        console.log('connection successful');
    }
});

conn.query('select * from asset_beneficiary_info', (err, result) => {
    console.log('results : ', result);
});