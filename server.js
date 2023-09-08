//Entry Point
const express = require("express");
//env setup
const dotenv = require("dotenv");
const errorHandler = require("./middleware/errorHandler");

const app = express();

// Middleware
app.use(express.json());

app.use("/api/contacts", require("./routes/contactRoutes"));

app.use(errorHandler);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log("App Started on Port:", port);
});
