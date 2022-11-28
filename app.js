const express = require('express');
const req = require('express/lib/request');
const res = require('express/lib/response');
const bodyParsser = require('body-parser');


const app = express();
const mongoose = require('mongoose');
require('dotenv/config');
app.use(bodyParsser.json());

//Import Routes
const postRoute = require('./routes/post');
app.use('/post', postRoute);
//Routes
app.get('/',(req, res) => {
    res.send('WE ARE ON!!');
});


//Connect to DB
mongoose.connect(process.env.DB_CONNECTION,() => {
console.log('connect to DB!')
});

//How do we start listening to the server

app.listen(3000);