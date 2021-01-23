/*
============================================
; Title:  Exercise 3.2
; Author: Professor Massoud
; Date:   21 January 2021
; Modified By: Jonathan Disla
; Description: Morgan logging
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

//require the modules to be used
var express = require('express');
var http = require('http');
var path = require('path');
var logger = require('morgan');
//the app variable will hold express
var app = express();

//look in the views folder for the front end pages
app.set('views', path.resolve(__dirname, 'views'));
//set the template engine as ejs
app.set('view engine', 'ejs');

//use looger in development mode
app.use(logger('dev'));

//add a route for the index
app.get('/', function(req, res){
    //render this message to the front end with EJS
    res.render('index',{
        message: 'This is the morgan logger app!'
    })
})

//create server on port 3000
http.createServer(app).listen(3000, function(){
    console.log("Listening on port: ", 3000)
})