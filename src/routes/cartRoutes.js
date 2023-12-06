const { getAllCart } = require("../route_handler/cartHandler");

const router = require("express").Router();

router.get('/', getAllCart)

module.exports = router
