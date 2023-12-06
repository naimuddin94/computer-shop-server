const {
  getAllCart,
  getAllCartByEmail,
  createCart,
  addProductToCart,
} = require("../route_handler/cartHandler");

const router = require("express").Router();

router.get("/", getAllCart);
router.get("/user/:email", getAllCartByEmail);
router.post("/", createCart);
router.put("/:email", addProductToCart);

module.exports = router;
