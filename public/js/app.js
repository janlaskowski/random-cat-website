let btn = document.querySelector("#btn");
let img = document.querySelector("#photo");
const cors = require('cors');
app.use(cors());
app.options("*", cors());

if(btn){
  btn.addEventListener("click", function() {
    let XHR = new XMLHttpRequest();
    
    XHR.onreadystatechange = function() {
      if (XHR.readyState == 4 && XHR.status == 200) {
        img.src = JSON.parse(XHR.responseText).file;  
      }
    }
    XHR.open("GET", "https://thecatapi.com/api/images/get?format=src&type=gif");
    XHR.send();
  });
}

