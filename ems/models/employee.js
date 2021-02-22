/*
============================================
; Title:  employee.js
; Author: Professor Massoud
; Date:   21 February 2020
; Modified By: Jonathan Disla
; Description: Employee model
;===========================================
*/

//required
var mongoose = require("mongoose");
var Schema = mongoose.Schema;

//Employee schema
var employeeSchema = new Schema({
  firstName: String,
  lastName: String,
});

//model
var Employee = mongoose.model("Employee", employeeSchema);

//export file
module.exports = Employee;
