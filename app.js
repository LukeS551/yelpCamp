const express = require("express");
const http = require('http');
const hostname = '127.0.0.1';
const port = 3000;
const app = express();


app.set("view engine", "ejs");
app.get('/', function(req, res){
    res.render("landing");
});
app.use(express.static('resources'));

app.get("/locations", function(req, res){
    const locations = [
        {name: "Auckland", image: "/images//dan-freeman-hIKVSVKH7No-unsplash.jpg" },
        {name: "Matamata", image: "/images/andres-iga-7XKkJVw1d8c-unsplash.jpg" },
    ]
    res.render("locations", {locations:locations});
});

app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
  });
// app.listen(process.env.Port, process.env.IP, function(){
//     console.log('yelpcamp begun');
// });