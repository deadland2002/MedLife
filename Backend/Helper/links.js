const { model } = require("mongoose");
const Database = require("../Helper/Database.js");
const Validate = require("../Helper/Validate.js");
const { validate } = require("../Schema/UserSchema.js");

const link = (app) => {
  app.get("/", function (req, res) {
    Validate.Test(req,res);
  });

  app.post("/SignIn", async function (req, res) {
    Validate.SignIn(req,res);
  });

  app.post("/SignUp", async function (req, res) {
    Validate.SignUp(req,res);
  });
  
  app.post("/Verify", async function (req, res) {
    Validate.VerifyOtp(req,res);
  });
  
  app.post("/VerifyToken", async function (req, res) {
    Validate.VerifyToken(req,res);
  });
};

module.exports = link;
