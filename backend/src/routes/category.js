const { Router } = require("express");
const { addCategory, getCategories } = require("../controller/category");
const {
  requireSignin,
  adminMiddleware,
} = require("../common-middleware/index");
const router = Router();

router.post("/category/create", requireSignin, adminMiddleware, addCategory);
router.get("/category/getcategories", getCategories);

module.exports = router;
