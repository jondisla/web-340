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
