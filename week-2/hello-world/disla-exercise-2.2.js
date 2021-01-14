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
var express = require('express');
//use the http module
var http = require('http');
//assign express to the app variable
var app = express();

//use express for request and response
app.use ((req, res)=>{
    console.log("In request: " + req.url);
    //the response should print hello world
    res.end("Hello World");
})

//listen on port 8080 and run the response
http.createServer(app).listen(8080)