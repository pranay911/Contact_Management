const asyncHandler = require("express-async-handler");

//@desc Register a user
//@route POST /api/users/register
//@access public
const registerUser = asyncHandler(async (req, res) => {
  res.json({ message: "Register User" });
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
