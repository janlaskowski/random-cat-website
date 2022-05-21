'use strict';

const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.options('*', cors());

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
