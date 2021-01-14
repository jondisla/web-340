/*
============================================
; Title:  Exercise 2.2
; Author: Professor Massoud
; Date:   14 January 2021
; Modified By: Jonathan Disla
; Description: Hello World with Express
;===========================================
*/

/**
* header: constant that holds the import from disla-header.js file
* console.log: logs the function from the disla-header.js file
*/
const header = require("../../disla-header.js");
console.log(header.display("Jonathan", "Disla", "Exercise 2.2"));

/*
===============================================
BEGIN ASSIGNMENT
===============================================
*/

//require express from modules
var express = require("express");
//require http module
var http = require("http");
//assign express to app variable
var app = express();
//using express or app, create the request/response function
app.use(function(req,res){
    console.log("in comes a request to: " + req.url);
    //the respond will print hello world to the page
    res.end("hello world");
})

//start the server on port 8000
http.createServer(app).listen(8000)