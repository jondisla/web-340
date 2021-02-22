var express = require("express");
var http = require("http");
var logger = require("morgan");
var path = require("path");
var mongoose = require("mongoose");
//import the Employee model
const Employee = require("../ems/models/employee");

var app = express();

//Look in the views folder for views
app.set("views", path.resolve(__dirname, "views"));

//CSS
app.use(express.static("public"));

//use ejs as templating engine
app.set("view engine", "ejs");

app.use(logger("short"));

//Mongo connection
mongoose
  .connect("mongodb+srv://jondisla:@Brownie01@cluster0.lti6z.mongodb.net", {
    dbName: "emsDB",
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("connected to db"))
  .catch((err) => console.log(err.message));

var employee = new Employee({
  firstName: "John",
  lastName: "Disla",
});

//Routes
app.get("/", (req, res) => {
  Employee.find()
    .then((result) => {
      res.render("index", { title: "All Employees", employees: result });
    })
    .catch((err) => {
      console.log(err);
    });
});

http.createServer(app).listen(8080, () => {
  console.log("Listening on Port: " + 8080);
});
