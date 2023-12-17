const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  photo: String,
  role: {
    type: String,
    enum: ["admin", "manager", "operator", "basic"],
    default: "basic",
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
});

module.exports = userSchema;
