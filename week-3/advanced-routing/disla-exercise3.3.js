/*
============================================
; Title:  Exercise 3.3
; Author: Professor Massoud
; Date:   21 January 2021
; Modified By: Jonathan Disla
; Description: Advanced Routing
;===========================================
*/

/**
* header: constant that holds the import from disla-header.js file
* console.log: logs the function from the disla-header.js file
*/
const header = require("../../disla-header.js");
console.log(header.display("Jonathan", "Disla", "Exercise 3.3"));

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

app.use(logger('dev'));

//use parameter symbol : and employeeId will be the value
app.get('/:employeeId', function(req, res){
    //assigning a variable for the paramater
    var employeeId = parseInt(req.params.employeeId, 10);
    //rendering the index page with employee ID as a property
    //to send to the front end.
    res.render('index', {
        employeeId: employeeId
    })
})

//create a server on port 8080
http.createServer(app).listen(8080, function(){
    console.log("Listening on port: ", 8080);
})