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

// get cart items by email address
const getAllCartByEmail = async (req, res) => {
  const email = req.params.email;
  try {
    const cart = await Cart.find({ email: email });

    if (!cart) {
      return res.status(404).json({ message: "No cart found" });
    }
    res.send(cart);
  } catch (error) {
    handleError(res, error);
  }
};

// create a new cart
const createCart = async (req, res) => { 
  const cart = req.body;
  try {
    await Cart.create(cart)
    res.status(201).json({message: "Cart created successfully"});
  } catch (error) {
    handleError(res, error);
  }
}

module.exports = { getAllCart, getAllCartByEmail, createCart };
