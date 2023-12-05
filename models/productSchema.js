const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  cover_image: {
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
    typeof: Number,
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
    typeof: String,
    default: Date.now(),
  },
});

module.exports = productSchema;
