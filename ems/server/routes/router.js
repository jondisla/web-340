/** @format */

const express = require("express");
const route = express.Router();
const services = require("../services/render");
const controller = require("../controller/controller");
//Routes
//Index
route.get("/", services.homeRoutes);
route.get("/new", services.new);

//API
route.post("/api/users", controller.create);
route.get("/api/users/", controller.find);

module.exports = route;
