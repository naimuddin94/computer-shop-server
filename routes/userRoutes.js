const {
  getAllUsers,
  getUserByEmail,
  createUser,
} = require("../rote_handler/userHandler");
const router = require("express").Router();

router.get("/", getAllUsers);
router.get("/:email", getUserByEmail);
router.post("/create-user", createUser);

module.exports = router;
