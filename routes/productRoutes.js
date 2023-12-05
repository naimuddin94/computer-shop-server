const { getAllProducts } = require("../rote_handler/productHandler");

const router = require("express").Router();

router.get("/", getAllProducts);

module.exports = router;
