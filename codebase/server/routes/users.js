const router = require("express").Router();

// importing controller functions
const {
    memberSignUp,
    memberLogIn
} = require("../controllers/userControllers.js");

// Sign Up Route for Members
router.post("/member-signup", memberSignUp);

// Log In Route for Members
router.post("/member-login", memberLogIn);

module.exports = router;