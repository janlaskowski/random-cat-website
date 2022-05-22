'use strict';

const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.options('*', cors());

app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8080');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';


//Static Files
app.use(express.static('public'));
app.use('/css', express.static(__dirname + 'public/css'))
app.use('/js', express.static(__dirname + 'public/js'))

// App
app.get('', (req, res) =>{
    res.sendFile(__dirname + '/public/html/index.html')
})


app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
