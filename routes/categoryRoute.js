const express = require("express");
const {
  getCategorsValidator,
  createCategorsValidator,
  updeatCategorsValidator,
  deleteCategorsValidator,
} = require("../utils/validators/categoryValidator");
const router = express.Router();
const {
  getcategory,
  creatCategory,
  getcategories,
  updateCategory,
  delecategories,
} = require("../controller/categoryController");

router.route("/").get( getcategory).post(createCategorsValidator, creatCategory);
router
  .route("/:id")
  .get(getCategorsValidator,getcategories)
  .put(updeatCategorsValidator, updateCategory)
  .delete(deleteCategorsValidator, delecategories);

module.exports = router;
