const express = require("express");
const {
  creatRestaurantValidator,
  getRestaurantValidator,
  updateRestaurantValidator,
  deleRestaurantValidator
} = require("../utils/validators/restaurantValidator");
const router = express.Router();
const {
  getRestaurant,
  creatRestaurant,
  getRestaurantId,
  updateRestaurant,
  deleRestaurant,
  uploadPostImage,
  resizeImage,
  status,
} = require("../controller/restaurantController");

router
  .route("/")
  .get(getRestaurant)
  .post(creatRestaurantValidator,creatRestaurant,uploadPostImage, resizeImage, status);
router
  .route("/:id")
  .get(getRestaurantValidator,getRestaurantId)
  .put(updateRestaurantValidator,updateRestaurant, uploadPostImage, resizeImage, status)
  .delete(deleRestaurantValidator,deleRestaurant);

module.exports = router;
