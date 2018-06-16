// 
var express = require('express');
var mongoose = require('mongoose');
var bodyparser = require('body-parser');
var cors = require('cors');
var path = require('path');

var app = express();

// connect to database
mongoose.connect('mongodb://localhost:27017/server');

//on connection 

mongoose.connection.on('connected', ()=> {
    console.log('connected to database');
});
mongoose.connection.on('error', (err)=>{
    if(err)
    {
        console.log('Error in database connetion:' +err);
    }
});

const route = require('./routes/route');

app.use(cors());

app.use(bodyparser.json());

app.use(express.static(path.join(__dirname, 'public'))); 

const port = 3000;

app.use('/api', route);

app.get('/', (req, res)=>{
    res.send('foobar');
});

app.listen(port, ()=>{
        console.log("server is running ");
});

