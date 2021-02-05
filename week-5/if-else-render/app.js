var express = require('express');
var http = require('http');
var path = require('path');

var app = express();
//look in the views folder for any files that involve the front end
app.set('views', path.resolve(__dirname, "views"));
//set the templating enging to ejs
app.set("view engine", "ejs");

var n = [
    "Jimmy", "Kevin", "Grayton", "Eunice"
];

app.get('/', (req, res)=>{
    res.render("index",{
        names: n
    })
});

http.createServer(app).listen(8080, ()=>{
    console.log('You are now on port: ' + 8080)
})