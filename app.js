const express = require("express");
const http = require('http');
const bodyParser = require('body-parser');

const hostname = '127.0.0.1';
const port = 3000;
const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.get('/', function(req, res){
    res.render("landing");
});
app.use(express.static('resources'));
    const locations = [
        {name: "Auckland", image: "/images/dan-freeman-hIKVSVKH7No-unsplash.jpg" },
        {name: "Matamata", image: "/images/andres-iga-7XKkJVw1d8c-unsplash.jpg" },
        {name: "Canterbury", image: "/images/ethan-dow-NjTzNQc5m1w-unsplash.jpg" },
        {name: "Tauranga", image: "/images/roell-de-ram-2DM7eOR5iyc-unsplash.jpg" },
        {name: "Tongariro", image: "/images/thomas-schweighofer-AjRxpTzZ-SU-unsplash.jpg" },
    ]
app.get("/locations", function(req, res){

    res.render("locations", {locations:locations});
});

app.get("/locations/new", function(req, res){
    res.render("new.ejs");
})

app.post("/locations", function(req, res){
    const name = req.body.name;
    const image = req.body.image;
    const newLocation  = {name: name, image: image};
    locations.push(newLocation);
res.redirect("/locations");
})

app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
  });
// app.listen(process.env.Port, process.env.IP, function(){
//     console.log('yelpcamp begun');
// });