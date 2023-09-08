const mongoose = require("mongoose");
const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please add the User Name"],
    },
    email: {
      type: String,
      required: [true, "Please add the Unique Email address"],
      unique: [true, "Email address already exists"],
    },
    password: {
      type: String,
      required: [true, "Please add the User Password"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", userSchema);
