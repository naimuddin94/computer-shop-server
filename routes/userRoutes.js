const { getAllUsers, createUser } = require("../rote_handler/userHandler");
const router = require("express").Router();

router.get("/", getAllUsers);
router.post("/create-user", createUser);

module.exports = router;
