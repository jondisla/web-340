//import libraries
var express = require('express');
var http = require('http');
var app = express();

app.get("/not-found", (req, res)=>{
    res.status(404);
    res.json({
        error: "Error not found."
    })
})

app.get("/ok", (req, res)=>{
    res.status(202);
    res.json({
        message: "Success, page loaded."
    })
})

app.get('/not-implemented', (req, res)=>{
    res.status(500);
    res.json({
        error: "Feature not implemented."
    })
})

http.createServer(app).listen(8080, ()=>{
    console.log("Listening on port: " + 8080)
})