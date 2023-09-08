//Entry Point
const express = require("express");
//env setup
const dotenv = require("dotenv");

const app = express();

app.get("/api/contacts", (req, res) => {
  res.send("Get All Contacts");
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log("App Started on Port:", port);
});
