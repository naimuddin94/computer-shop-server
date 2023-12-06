const {
  getAllUsers,
  createUser,
  updateUserRole,
} = require("../route_handler/userHandler");
const router = require("express").Router();

router.get("/", getAllUsers);
router.post("/create-user", createUser);
router.put("/:id", updateUserRole);

module.exports = router;
