const { model } = require("mongoose");
const Database = require("../Helper/Database.js");
const UserValidate = require("../Helper/UserValidate.js");
const DoctorValidate = require("../Helper/DoctorValidate.js");
const { validate } = require("../Schema/UserSchema.js");

const link = (app) => {
  app.get("/", function (req, res) {
    UserValidate.Test(req,res);
  });

  app.post("/SignIn", async function (req, res) {
    UserValidate.SignIn(req,res);
  });

  app.post("/SignUp", async function (req, res) {
    UserValidate.SignUp(req,res);
  });
  
  app.post("/Verify", async function (req, res) {
    UserValidate.VerifyOtp(req,res);
  });
  
  app.post("/VerifyToken", async function (req, res) {
    UserValidate.VerifyToken(req,res);
  });
  
  app.post("/api/DoctorSignIn", async function (req, res) {
    DoctorValidate.SignIn(req,res);
  });
};

module.exports = link;
