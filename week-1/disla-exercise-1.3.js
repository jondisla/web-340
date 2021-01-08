/*
============================================
; Title:  Exercise 1.2
; Author: Professor Massoud
; Date:   7 January 2021
; Modified By: Jonathan Disla
; Description: Modules
;===========================================
*/

/**
* header: constant that holds the import from disla-header.js file
* console.log: logs the function from the disla-header.js file
*/
const header = require("../disla-header.js");
console.log(header.display("Jonathan", "Disla", "Exercise 1.3"));

/*
===============================================
BEGIN ASSIGNMENT
===============================================
*/

var url = require("url");

var parsedURL = url.parse("https://www.example.com/profile?name=jonathan");

console.log(parsedURL.protocol);

console.log(parsedURL.host);

console.log(parsedURL.query);