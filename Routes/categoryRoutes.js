const express = require("express");
const {
  getCategories,
  postCategories,
  deleteCategories,
  getSelectedCategories,
  updateCategories,
} = require("../Controllers/categoryController.js");
const { adminValidateToken } = require("../Middleware/tokenHandeller.js");
router = express.Router();

router.route("/").get(getCategories).post(adminValidateToken, postCategories);

router
  .route("/:id")
  .delete(adminValidateToken, deleteCategories)
  .get(getSelectedCategories)
  .put(adminValidateToken, updateCategories);
module.exports = router;
