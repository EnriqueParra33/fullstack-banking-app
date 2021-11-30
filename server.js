var express = require('express');
var cors    = require('cors');
var path    = require('path');
var dal     = require('./dal.js');
var app     = express();
require('dotenv').config();
app.use(cors());

// used to serve static files from public directory
if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "client", "build")));
    app.get("*", (req, res) => {
      res.sendFile(path.join(__dirname, "client", "build", "index.html"));
    });
  } else {
    app.get("/", (req, res) => {
      res.send("API");
    });
  }
  
  // create user account
  app.get("/account/create/:name/:email/:password", function (req, res) {
    // check if account exists
    dal.find(req.params.email).then((users) => {
      // if user exists, return error message
      if (users.length > 0) {
        console.log("User already exists");
        res.send("User already exists");
      } else {
        // else create user
        dal
          .create(req.params.name, req.params.email, req.params.password)
          .then((user) => {
            console.log(JSON.stringify(user));
            res.send(JSON.stringify(user));
          });
      }
    });
  });
  
  // login user
  app.get("/account/login/:email/:password", function (req, res) {
    dal.find(req.params.email).then((user) => {
      // if user exists, check password
      if (user.length > 0) {
        if (user[0].password === req.params.password) {
          res.send(user[0]);
        } else {
          res.send("Login failed: wrong password");
        }
      } else {
        res.send("Login failed: user not found");
      }
    });
  });
  
  // find user account
  app.get("/account/find/:email", function (req, res) {
    dal.find(req.params.email).then((user) => {
      console.log(user.text());
      res.send(user.text());
    });
  });
  
  // find one user by email - alternative to find
  app.get("/account/findOne/:email", function (req, res) {
    dal.findOne(req.params.email).then((user) => {
      console.log(user);
      res.send(user);
    });
  });
  
  // update - deposit/withdraw amount
  app.get("/account/update/:email/:amount", function (req, res) {
    var amount = Number(req.params.amount);
  
    dal.update(req.params.email, amount).then((response) => {
      console.log(response);
      res.send(response);
    });
  });
  
  // all accounts
  app.get("/account/all", function (req, res) {
    dal.all().then((docs) => {
      console.log(docs);
      res.send(docs);
    });
  });
  
  var port = process.env.PORT || 5000;
  app.listen(port, () => {
    console.log("Running on port: " + port);
  });