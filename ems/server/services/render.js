/** @format */
//use axios to make requests
const axios = require("axios");

exports.homeRoutes = (req, res) => {
  //make get request to api/users
  axios
    .get("http://localhost:3000/api/users")
    .then(function (response) {
      res.render("index", { users: response.data });
    })
    .catch((err) => {
      res.send(err);
    });
};
exports.new = (req, res) => {
  res.render("new");
};
