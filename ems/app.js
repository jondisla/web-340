var express = require('express');
var http = require('http');
var logger = require('morgan');
var path = require('path');

var app = express();

app.set('views', path.resolve(__dirname, "views"));

app.set("view engine", "ejs");

app.use(logger("short"));

app.get('/', (req, res)=>{
    res.render("index",{
        title: "Home Page"
    })
});

http.createServer(app).listen(8080, ()=>{
    console.log("Listening on Port: " + 8080)
})