/*
============================================
; Title:  Exercise 3.4
; Author: Professor Massoud
; Date:   24 January 2021
; Modified By: Jonathan Disla
; Description: Routing and Navigation with Express
;===========================================
*/

/**
* header: constant that holds the import from disla-header.js file
* console.log: logs the function from the disla-header.js file
*/
const header = require("../../disla-header.js");
console.log(header.display("Jonathan", "Disla", "Exercise 3.4"));

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

app.use(logger('short'));

//ROUTES
app.get('/', function(req, res){
    //rendering the contact page with a message
    res.render('index', {
        message: "home page"
    })
})
app.get('/about', function(req, res){
    //rendering the contact page with a message
    res.render('about', {
        message: "about page"
    })
})
app.get('/contact', function(req, res){
    //rendering the contact page with a message
    res.render('contact', {
        message: "contact page"
    })
})
app.get('/products', function(req, res){
    //rendering the contact page with a message
    res.render('contact', {
        message: "products page"
    })
})


//create a server on port 8080
http.createServer(app).listen(8080, function(){
    console.log("App started on port: ", 8080);
})