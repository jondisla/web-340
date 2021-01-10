/*
============================================
; Title:  Exercise 1.5
; Author: Professor Massoud
; Date:   10 January 2021
; Modified By: Jonathan Disla
; Description: Node server
;===========================================
*/

/**
* header: constant that holds the import from disla-header.js file
* console.log: logs the function from the disla-header.js file
*/
const header = require("../disla-header.js");
console.log(header.display("Jonathan", "Disla", "Exercise 1.5"));

/*
===============================================
BEGIN ASSIGNMENT
===============================================
*/

//use node js http module and assign it to a variable
var http = require("http");

//this function handles the request and response of the http module
function requestHandler(request, response){
    //the body variable holds the string to be printed to page
    var body = "Hello, world!";
    //upon refreshing page, log this message to console
    console.log("server ready on " + request.url)
    //the response outputs the string inside the body variable
    response.end(body);
}

//using the createServer property of the http module
//assign the function requestHandler
var server = http.createServer(requestHandler);
// starts the server and listens on port 8000
server.listen(8000)