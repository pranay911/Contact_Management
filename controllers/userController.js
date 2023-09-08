const asyncHandler = require("express-async-handler");
// const bcrypt= require("b")
const User = require("../models/userModel");
//@desc Register a user
//@route POST /api/users/register
//@access public
const registerUser = asyncHandler(async (req, res) => {
  const { username, email, password } = req.body;
  if (!username || !email || !password) {
    res.status(400);
    throw new Error("All fields are required");
  }
  const userAvailable = await User.findOne({ email });
  if (userAvailable) {
    res.status(400);
    throw new Error("User Already Register");
  }
  //Password Hashing
  const newUser = await User.res.json({ message: "Register User" });
});

//@desc Login a user
//@route POST /api/users/login
//@access public
const loginUser = asyncHandler(async (req, res) => {
  res.json({ message: "Login User" });
});

//@desc Current a user
//@route GETT /api/users/current
//@access private
//Only login user can access
const currentUser = asyncHandler(async (req, res) => {
  res.json({ message: "Current User Info" });
});

module.exports = { registerUser, loginUser, currentUser };
