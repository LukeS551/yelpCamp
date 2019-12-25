const express = require("express");
const http = require('http');
const hostname = '127.0.0.1';
const port = 3000;
var app = express();
app.get('/', function(req, res){
    res.send("this will be the landing page soon!");
});

app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
  });
// app.listen(process.env.Port, process.env.IP, function(){
//     console.log('yelpcamp begun');
// });