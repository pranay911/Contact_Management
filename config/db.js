const mongoose = require("mongoose");
// console.log();
const connectDb = async () => {
  try {
    const connect = await mongoose.connect(
      "mongodb://localhost:27017/Contact_Management"
    );
    console.log(
      "DB Connected::",
      connect.connection.host,
      connect.connection.name
    );
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

module.exports = connectDb;
