const {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
} = require("../rote_handler/productHandler");

const router = require("express").Router();

router.get("/", getAllProducts);
router.get("/:id", getProductById);
router.post("/create-product", createProduct);
router.put("/:id", updateProduct);

module.exports = router;
