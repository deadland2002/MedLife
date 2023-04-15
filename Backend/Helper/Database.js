const mongoose = require("mongoose");
const userSchema = require("./Schema/UserSchema.js");
const dotenv = require("dotenv");
dotenv.config();

URL = process.env.DATABASEURL;



module.exports = {
  connect: () => {

    mongoose
      .connect(URL)
      .then(() => {
        console.log("Database Connected");
      })
      .catch(() => {
        console.log("Database connection failed");
      });
  },
};
