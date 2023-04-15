const express = require("express");
const links = require("./Helper/links.js")
const app = express();
const Databse = require("./Helper/Database.js")


links(app);


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("Public"));


Databse.connect();


app.listen(2000, function (err) {
  if (err) {
    console.log(err);
  } else {
    console.log("Server running on port 2000");
    console.log("%s", "http://localhost:2000");
  }
});
