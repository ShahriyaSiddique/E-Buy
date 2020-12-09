const { signup, signin, requireSignin } = require("../controller/auth");
const { Router } = require("express");
const router = Router();

router.post("/signup", signup);
router.post("/signin", signin);

router.post("/profile", requireSignin, (req, res) => {
  res.status(200).json({
    user: req.user,
  });
});

module.exports = router;
