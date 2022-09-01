const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const CreateError = require("http-errors");

//@desc POST user
//@route POST  /api/users/
//@access Public
const registerUser = asyncHandler(async (req, res) => {
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    res.status(404);
    throw new Error("Please fill all the fields to proceed");
  }

  const userExist = await User.findOne({ email });
  if (userExist) {
    res.status(400);
    throw new Error("The email already exist");
  }

  const salt = await bcrypt.genSalt(10);
  const hashPassword = await bcrypt.hash(password, salt);

  try {
    const user = await User.create({
      username,
      email,
      password,
    });
    res.status(200).json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }

  //checking if user entered the correct valus
  if (user) {
    res.status(201).json({
      _id: user.id,
      username: user.username,
      email: user.email,
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error("INVALID data");
  }
});

//@desc POST
//@route POST  /api/users/login
//@access Public

const loginUser = asyncHandler(async (req, res, next) => {
  //declare the fieldset you need to be field
  const { email, password } = req.body;
  console.log(email + " Pas " + password);
  //checking is user is in db
  const user = await User.findOne({ email });
  if (!user) {
    res.status(400).json("User not found");
  }
  console.log(user.password);
  /*if (user && (await bcrypt.compare(password, user.password))) {
    res.status(201).json({
      _id: user.id,
      username: user.username,
      email: user.email,
      token: generateToken(user._id),
    });*/
  if ((user.password = password)) {
    res.status(201).json({
      _id: user.id,
      username: user.username,
      email: user.email,
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error("INVALID credentials");
  }
});

/*
  try {
    const user = await User.findOne({ username: req.body.username });
    if (!user) return next(CreateError(404, "username does not exist"));
    const isMatch = await bcrypt.compare(req.body.password, user.password);
    if (!isMatch) return next(CreateError(400, "wrong password or username"));

    const token = jwt.sign(
      { id: user._id, isAdmin: user.isAdmin },
      process.env.JWT
    );
    const { password, isAdmin, ...otherDetails } = user._doc;
    res
      .cookie("access_token", token, { httpOnly: true })
      .status(200)
      .json({ ...otherDetails });
  } catch (err) {
    next(err);
  }
});*/
//@desc Get User Data
//@route GET  /api/users/getme
//@access Public
const getMyPost = asyncHandler(async (req, res) => {
  const { _id, username, email } = await User.findById(req.user.id);
  res.status(200).json({
    id: _id,
    username,
    email,
  });
});

//generating token for potection purpose
const generateToken = (id) => {
  //keeps user in cache memory for the next 30 days, then you will have to login against
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });
};

module.exports = {
  registerUser,
  loginUser,
  getMyPost,
};
