const express = require("express");
const {
  signupValidator,
  loginValidator,
} = require("../utils/validators/authValidator ");

const router = express.Router();
const {
  signup,
  login,
  forgotPassword,
  verifyPassResetCode,
  resetPassword,
} = require("../controller/authController");



router.route("/signup").post(signupValidator,signup);
router.route("/login").post( loginValidator, login);
router.route("/forgotPassword").post(forgotPassword);
router.route("/verifyResetCode").post(verifyPassResetCode);
router.route("/resetPassword").put(resetPassword);



module.exports = router;
