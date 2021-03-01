/**
 * /*
 * ============================================
 * ; Title:  app.js
 * ; Author: Professor Massoud
 * ; Date:   21 February 2020
 * ; Modified By: Jonathan Disla
 * ; Description: server and database connection
 * ;===========================================
 *
 * @format
 */

var express = require("express");
var http = require("http");
var logger = require("morgan");
var helmet = require("helmet");
var path = require("path");
var mongoose = require("mongoose");
var bodyParser = require("body-parser");
var cookieParser = require("cookie-parser");
var csrf = require("csurf");
//import the Employee model
const Employee = require("../ems/models/employee");

// setup csrf protection

var csrfProtection = csrf({ cookie: true });

var app = express();

//Look in the views folder for views
app.set("views", path.resolve(__dirname, "views"));
//use ejs as templating engine
app.set("view engine", "ejs");

//CSS
app.use(express.static("public"));

app.use(logger("short"));

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use(cookieParser());

app.use(csrfProtection);

app.use(function (request, response, next) {
  var token = request.csrfToken();

  response.cookie("XSRF-TOKEN", token);

  response.locals.csrfToken = token;

  next();
});

//Mongo connection
mongoose
  .connect("mongodb+srv://jondisla:@Brownie01@cluster0.lti6z.mongodb.net", {
    dbName: "emsDB",
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("connected to db"))
  .catch((err) => console.log(err.message));

//Routes

app.get("/", (req, res) => {
  res.render("index", {
    mesage: "XSS Prevention Example",
  });
});

app.get("/new", function (request, response) {
  response.render("new", {
    message: "New Employee Entry  Page",
  });
});

app.post("/process", function (request, response) {
  console.log(request.body.txtName);

  response.redirect("/");
});

///////////

app.post("/process", function (request, response) {
  // console.log(request.body.txtName);

  if (!request.body.txtName) {
    response.status(400).send("Entries must have a name");

    return;
  }

  // get the request's form data

  var fruitName = request.body.txtName;

  console.log(fruitName);

  // create a fruit model

  var fruit = new Fruit({
    name: fruitName,
  });

  // save

  fruit.save(function (error) {
    if (error) throw error;

    console.log(fruitName + " saved successfully!");
  });

  response.redirect("/");
});

///////////

http.createServer(app).listen(8080, () => {
  console.log("Listening on Port: " + 8080);
});
