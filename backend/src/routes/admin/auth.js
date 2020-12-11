const {
  signup,
  signin,
  requireSignin,
} = require("../../controller/admin/auth");
const { Router } = require("express");
const router = Router();

router.post("/admin/signup", validateSignupRequest, isRequestValidated, signup);
router.post("/admin/signin", validateSignupRequest, isRequestValidated, signin);

module.exports = router;
