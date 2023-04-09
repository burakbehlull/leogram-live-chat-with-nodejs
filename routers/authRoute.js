const express = require("express");
const router = express.Router();

const authController = require("../controllers/authController");
const registerValidation = require('../validations/register-validation')

router.route("/accounts/register").post(registerValidation, authController.createUser)
router.route("/accounts/login").post(authController.loginUser);
router.route("/accounts/logout").get(authController.logoutUser);

module.exports = router;
