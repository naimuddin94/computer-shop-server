const mongoose = require("mongoose");
const userSchema = require("../models/usersSchema");
const User = mongoose.model("User", userSchema);
