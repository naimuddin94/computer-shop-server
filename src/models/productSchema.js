const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  images: {
    type: [String],
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  brand: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  features: {
    type: [String],
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  publisher: {
    name: String,
    email: String,
  },
  approved: {
    type: Boolean,
    default: false,
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
});

module.exports = productSchema;
