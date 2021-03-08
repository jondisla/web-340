/** @format */

var Userdb = require("../model/model");

//validation
exports.create = (req, res) => {
  if (!req.body) {
    res.status(400).send({ message: "Cannot be empty" });
    return;
  }

  //new user
  const user = new Userdb({
    fname: req.body.fname,
    lname: req.body.lname,
  });

  //save
  user
    .save(user)
    .then((data) => {
      res.redirect("/");
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "An error occurred while creating",
      });
    });
};

exports.find = (req, res) => {
  Userdb.find()
    .then((user) => {
      res.send(user);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Error occured retriving records",
      });
    });
};
