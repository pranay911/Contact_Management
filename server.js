//Entry Point
const express = require("express");
//env setup
const dotenv = require("dotenv");
const errorHandler = require("./middleware/errorHandler");
const connectDb = require("./config/db");

const app = express();

// Middleware
app.use(express.json());

//Contacts
app.use("/api/contacts", require("./routes/contactRoutes"));
//Users
app.use("/api/users", require("./routes/userRoutes"));

app.use(errorHandler);

//DB
connectDb();

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log("App Started on Port:", port);
});
