//Entry Point
const express = require("express");
//env setup
const dotenv = require("dotenv");

const app = express();

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log("App Started on Port:", port);
});
