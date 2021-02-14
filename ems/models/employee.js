const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const employeeSchema = {
    firstName: String,
    lastName: String,
    email: String
}

//model
const Employee = mongoose.model('Employee', employeeSchema)
module.exports = Employee;