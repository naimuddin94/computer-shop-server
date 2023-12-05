const mongoose = require("mongoose");
const userSchema = require("../models/usersSchema");
const handleError = require("../lib/errorHandler");
const User = mongoose.model("User", userSchema);

// get all users
const getAllUsers = async (req, res) => {
  const email = req.query.email;
  const query = {};
  if (email) {
    query.email = email;
  }
  try {
    const users = await User.find(query);
    res.send(users);
  } catch (error) {
    handleError(res, error);
  }
};

// create a new user
const createUser = async (req, res) => {
  const user = req.body;
  try {
    await User.create(user);
    res.status(201).json({ message: "Account created successfully" });
  } catch (error) {
    handleError(res, error);
  }
};

module.exports = { getAllUsers, createUser };
