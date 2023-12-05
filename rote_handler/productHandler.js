const mongoose = require("mongoose");
const productSchema = require("../models/productSchema");
const handleError = require("../lib/errorHandler");
const Product = mongoose.model("Product", productSchema);

// get all products
const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find({ approved: true });
    res.status(200).send(products);
  } catch (error) {
    handleError(res, error);
  }
};

// get product by id
const getProductById = async (req, res) => {
  const id = req.params.id;
  try {
    const product = await Product.findById(id);
    res.send(product);
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

// update product
const updateProduct = async (req, res) => {
  const id = req.params.id;
  const {
    name,
    cover_image,
    images,
    category,
    brand,
    price,
    features,
    description,
  } = req.body;
  try {
    await Product.findByIdAndUpdate(
      id,
      {
        name,
        cover_image,
        images,
        category,
        brand,
        price,
        features,
        description,
      },
      { new: true }
    );
    res.json({ message: "Updated successfully" });
  } catch (error) {
    handleError(res, error);
  }
};

module.exports = {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
};
