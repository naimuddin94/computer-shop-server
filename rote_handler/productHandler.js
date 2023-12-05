const mongoose = require("mongoose");
const productSchema = require("../models/productSchema");
const handleError = require("../lib/errorHandler");
const Product = mongoose.model("product", productSchema);

// get all products
const getAllProducts = async (res, req) => {
  const query = {};
  try {
    const products = await Product.find(query);
    res.status(200).send(products);
  } catch (error) {
    handleError(res, error);
  }
};

// create a new product
const createProduct = async (req, res) => {
  const product = req.body;
  try {
    await Product.create(product);
    res.status(201).json({ message: "Product added successfully" });
  } catch (error) {
    handleError(res, error);
  }
};

module.exports = { getAllProducts, createProduct};
