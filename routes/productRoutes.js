const {
  getAllProducts,
  getProductById,
  createProduct,
} = require("../rote_handler/productHandler");

const router = require("express").Router();

router.get("/", getAllProducts);
router.get("/:id", getProductById);
router.post("/create-product", createProduct);

module.exports = router;
