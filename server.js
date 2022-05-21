'use strict';


const express = require('express');
const app = express();

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

// app.get('/', (req, res) => {
//   res.send('Hello World');
// });
// app.get("/", (req, res) => {
//     res.sendFile(__dirname + "/index.html")
// })


app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
