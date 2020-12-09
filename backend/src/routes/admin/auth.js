const {
  signup,
  signin,
  requireSignin,
} = require("../../controller/admin/auth");
const { Router } = require("express");
const router = Router();

router.post("/admin/signup", signup);
router.post("/admin/signin", signin);

module.exports = router;
