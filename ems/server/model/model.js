/** @format */

const mongoose = require("mongoose");

var schema = new mongoose.Schema({
  fname: {
    type: String,
    required: true,
  },
  lname: {
    type: String,
    required: true,
  },
});

const Userdb = mongoose.model("userdb", schema);
module.exports = Userdb;
