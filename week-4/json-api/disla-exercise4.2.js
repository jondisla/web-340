
/*
============================================
; Title:  disla-exercise4.2.js
; Author: Jonathan Disla
; Date:   29 January 2021
; Description: Create an json api
;===========================================
*/

//requiring the below libraries
var express = require('express');
var http = require('http');
var app = express();

//create route /customer with the paramenter id
app.get("/customer/:id", (req, res)=>{
    //store the id as an integer in the id variable
    var id = parseInt(req.params.id, 10);
    //cfeate json object that receives the id of the api call
    res.json({
        firstName: "John",
        lastName: "Disla",
        employeeId: id
    })
})

//create the server on port 8008
http.createServer(app).listen(8080, ()=>{
    console.log("Listening on port: " + 8080)
})