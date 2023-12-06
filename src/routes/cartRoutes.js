const {
  getAllCart,
  getAllCartByEmail,
} = require("../route_handler/cartHandler");

const router = require("express").Router();

router.get("/", getAllCart);
router.get("/user/:email", getAllCartByEmail);

module.exports = router;
