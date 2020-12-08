const { signup } = require("../controller/user");
const { Router } = require("express");
const router = Router();

router.post("/signup", signup);
router.post("/signin");

module.exports = router;
