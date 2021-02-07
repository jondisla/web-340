var express = require('express');
var http = require('http');
var path = require('path');
var pug = require('pug');

var app = express();

app.set('views', path.resolve(__dirname, "views"));

app.set("view engine", "pug");

app.get("/", (req, res)=>{
    res.render("index",{
        message: "Hello world we're now using Pug!!!"
    })
});

http.createServer(app).listen(8080, ()=>{
    console.log("App listening on Port: " + 8080)
})