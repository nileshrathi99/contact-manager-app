const express = require("express");
const { registerUser, loginUser, currentUser, deleteUser, users } = require("../controllers/uesrController");
const validateToken = require("../middleware/validateTokenHandler")
const router = express.Router();

router.route("/").get(users);
router.route("/register").post(registerUser);
router.route("/login").post(loginUser);
router.route("/current").get(validateToken, currentUser);
router.route("/:id").delete(deleteUser);


module.exports = router;