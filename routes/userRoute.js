const express = require("express");
const {
  getUserValidator,
  createUserValidator,
  updateUserValidator,
  deleteUserValidator,
  changeuserPasswordValidator,
  updateLoggedUserValidator,
} = require("../utils/validators/userValidator");

const router = express.Router();
const {
  getuser,
  getuserId,
  creatuser,
  updateuser,
  deleuser,
  changeuserPassword,
  getLoggedUserData,
  updateLoggedUserPassword,
  updateLoggedUserData,
  deleteLoggedUserData,
} = require("../controller/userController");

const authController = require("../controller/authController");

router.get("/getMe", getLoggedUserData, getuser);
router.put(
  "/changeMyPassword",
  authController.protect,
  updateLoggedUserPassword
);
router.put("/updateMe", updateLoggedUserValidator,updateLoggedUserData);
router.delete("/deletMe", deleteLoggedUserData);

router.put("/changePassword/:id",changeuserPasswordValidator, changeuserPassword);

router.route("/").get(authController.protect, getuser).post(createUserValidator, creatuser);
router
  .route("/:id")
  .get(getUserValidator, getuserId)
  .put(updateUserValidator ,updateuser)
  .delete(deleteUserValidator, deleuser);

module.exports = router;
