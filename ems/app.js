/** @format */

const express = require("express");
const path = require("path");
//separate secret info in dotenv
const dotenv = require("dotenv");
//see requests in terminal
const morgan = require("morgan");
const bodyparser = require("body-parser");
const controller = require("./server/controller/controller");
//Mongo connection
const connectDB = require("./server/database/connection");

dotenv.config({ path: "config.env" });
const PORT = process.env.PORT || 8080;

const app = express();

app.use(morgan("tiny"));

//connection
connectDB();

app.use(bodyparser.urlencoded({ extended: true }));

//ROUTES
app.use("/", require("./server/routes/router"));

//load assets
app.use("/css", express.static(path.resolve(__dirname, "assets/css")));

//set view engine
app.set("view engine", "ejs");
//folder to look for views
app.set("views", path.join(__dirname, "views"));

app.listen(PORT, () => {
  console.log(`Listening on http://localhost:${PORT}`);
});
