const { getAllProducts, createProduct } = require("../rote_handler/productHandler");

const router = require("express").Router();

router.get("/", getAllProducts);
router.post("/create-product", createProduct);

module.exports = router;
