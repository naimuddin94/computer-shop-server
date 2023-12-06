const {
  getAllCart,
  getAllCartByEmail,
  createCart,
} = require("../route_handler/cartHandler");

const router = require("express").Router();

router.get("/", getAllCart);
router.get("/user/:email", getAllCartByEmail);
router.post("/", createCart);

module.exports = router;
