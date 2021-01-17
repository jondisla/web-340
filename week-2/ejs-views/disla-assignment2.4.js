var http =  require('http');
var express = require('express');
var path = require('path');
var app = express();
var PORT = 8080;

//tell express the views are in the views folder
app.set("views", path.resolve(__dirname, "views"));

//use the ejs engine
app.set("view engine", "ejs");

//home index route
app.get("/", function(req, res){
    res.render("index",{
        message:"Welcome to the homepage!"
    });
});

http.createServer(app).listen(PORT, function(){
    console.log("EJS-Views app started on port: " + PORT);
});