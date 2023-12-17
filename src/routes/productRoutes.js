const {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
} = require("../route_handler/productHandler");

const router = require("express").Router();

router.get("/", getAllProducts);
router.get("/:id", getProductById);
router.post("/", createProduct);
router.put("/:id", updateProduct);
router.delete("/:id", deleteProduct);

module.exports = router;
