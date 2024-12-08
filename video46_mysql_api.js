//video 48-52
const express = require('express');
const connection = require('./utils/sqlutil');

const app = express();

app.use(express.json());

app.get('/search', (req, res) => {
    console.log('in get method');
    connection.query('select * from asset_beneficiary_info', (err, result) => {
        if(err) {
            res.send('Get unsuccessful');
        } else {
            console.log('results : ', result);
            res.send(result);
        }
    });
})


app.post('/insert', (req, res) => {
    //const data = {name:'irfan', password:'1234', user_type:'fte'}
    const data = req.body;
    console.log('in post method ' + data);
    connection.query('insert into user SET ?', data, (error, result, field) => {
        if(error) {
            throw error;
        }
        res.send(result);
    })
})


app.put('/update/:id', (req, res) => {
    const data = [req.body.name, req.body.password, req.body.user_type, req.params.id]
    //const data = req.body;
    console.log('in put method ' + data);
    connection.query('update user SET name=?,  password=?, user_type=? where id=?', data, (error, result, field) => {
        if(error) {
            throw error;
        }
        res.send(result);
    })
    // res.send('update success');
})


app.delete('/delete/:id', (req, res) => {
    const data = [req.params.id]

    connection.query('delete from user where id=?', data ,(error, result) => {
        if(error) throw error;
        res.send(result);
    })

    // res.send('delete success'+ req.params.id);
})
app.listen(5000);