const express = require("express");
const router = express.Router();
const {
  signUpUser,
  signInUser,
  googleSignUpUser,
  googleSignInUser,
} = require("../controllers/userControllers");

router.route("/signup").post(signUpUser);
router.route("/signin").post(signInUser);
router.route("/google-signup").post(googleSignUpUser);
router.route("/google-signin").post(googleSignInUser);
module.exports = router;
