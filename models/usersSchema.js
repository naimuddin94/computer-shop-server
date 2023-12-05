const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    default: "https://i.ibb.co/Wp6D9Ys/8b167af653c2399dd93b952a48740620.jpg",
  },
  email: {
    type: String,
    required: true,
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
});

module.exports = userSchema;
