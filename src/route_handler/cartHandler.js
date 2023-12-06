const mongoose = require("mongoose");
const cartSchema = require("../models/cartSchema");
const handleError = require("../lib/errorHandler");
const Cart = mongoose.model("Cart", cartSchema);

// get all cart items for admin
const getAllCart = async (req, res) => {
  try {
    const carts = await Cart.find();
    res.send(carts);
  } catch (error) {
    handleError(res, error);
  }
};

module.exports = { getAllCart };
