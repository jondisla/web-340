var express = require('express');
var http = require('http');
var logger = require('morgan');
var mongoose = require('mongoose');

var app = express();

const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://jondisla:@Brownie01@cluster0.lti6z.mongodb.net/<dbname>?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});

app.get("/", (req, res)=>{
    res.send("Application Works!")
})

http.createServer(app).listen(8080, ()=>{
    console.log("App started on port: " + 8080)
})