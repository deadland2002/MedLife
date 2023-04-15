const { model } = require("mongoose");
const Database = require("../Helper/Database.js");
const Validate = require("../Helper/Validate.js")

const link = (app) => {
  app.get("/", function (req, res) {
    Validate.Test(req,res);
  });

  app.post("/SignIn", async function (req, res) {
    Validate.SignIn(req,res);
  });

  app.get("/SignUp", async function (req, res) {});
};

module.exports = link;
