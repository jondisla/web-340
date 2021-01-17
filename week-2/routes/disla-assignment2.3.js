var express = require('express');
var http = require("http");
var app = express();

app.get("/", function(req, res){
    console.log(req.url)
    res.end("Welcome home!");
});

app.get("/about", function(req, res){
    console.log(req.url)
    res.end("Welcome to about page!");
});

app.get("/contact", function(req, res){
    console.log(req.url)
    res.end("Welcome to the contact page!");
});

app.use(function(req, res){
    
    res.statusCode = 404;
    res.end("404!");
});

http.createServer(app).listen(8080);