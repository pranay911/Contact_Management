const asyncHandler = require("express-async-handler");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
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
  const hashPassword = await bcrypt.hash(password, 10);
  console.log(hashPassword);
  const newUser = await User.create({
    username,
    email,
    password: hashPassword,
  });
  console.log("User Created");
  if (newUser) {
    res.status(201).json({ _id: user.id, email: user.email });
  } else {
    res.status(400);
    throw new Error("User data is not Valid!!");
  }
  res.json(newUser);
});

//@desc Login a user
//@route POST /api/users/login
//@access public
const loginUser = asyncHandler(async (req, res) => {
  //Fetch Email and Password
  const { email, password } = req.body;
  if (!email || !password) {
    res.status(400);
    throw new Error("All fields are required.");
  }

  const user = await User.findOne({ email });
  //compare password with hashpassword
  if (user && (await bcrypt.compare(password, user.password))) {
    //access token
    const accessToken = jwt.sign(
      {
        user: {
          username: user.username,
          email: user.email,
          id: user.id,
        },
      },
      process.env.ACCESS_TOKEN_SECRET,
      { expiresIn: "15m" }
    );
    res.status(200).json({ accessToken });
  } else {
    res.status(401);
    throw new Error("Email or Password is not valid!!");
  }
  res.json({ message: "Login User" });
});

//@desc Current a user
//@route GETT /api/users/current
//@access private
//Only login user can access
const currentUser = asyncHandler(async (req, res) => {
  res.json(req.user);
});

module.exports = { registerUser, loginUser, currentUser };
