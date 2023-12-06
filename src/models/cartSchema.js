const mongoose = require("mongoose");

const cartSchema = mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  product_ids: {
    type: [String],
    required: true,
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
});

module.exports = cartSchema;
