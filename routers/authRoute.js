const express = require("express");
const router = express.Router();

const authController = require("../controllers/authController");

router.route("/accounts/register").post(authController.createUser)
router.route("/accounts/login").post(authController.loginUser);
router.route("/accounts/logout").get(authController.logoutUser);

module.exports = router;
