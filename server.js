'use strict';


const express = require('express');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';
let btn = document.querySelector("#btn");
let img = document.querySelector("#photo");
const app = express();

//Static Files
app.use(express.static('public'));
app.use('/css', express.static(__dirname + 'public/css'))
app.use('/js', express.static(__dirname + 'public/js'))

// App
app.get('', (req, res) =>{
    res.sendFile(__dirname + '/html/index.html')
})

// app.get('/', (req, res) => {
//   res.send('Hello World');
// });
// app.get("/", (req, res) => {
//     res.sendFile(__dirname + "/index.html")
// })

btn.addEventListener("click", function() {
  let XHR = new XMLHttpRequest();
  
  XHR.onreadystatechange = function() {
    if (XHR.readyState == 4 && XHR.status == 200) {
      img.src = JSON.parse(XHR.responseText).file;  
    }
  }
  XHR.open("GET", "https://aws.random.cat/meow");
  XHR.send();
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
