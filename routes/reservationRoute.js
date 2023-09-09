const express = require("express");
const {
  creatreservationsValidator,
  getreservationsValidator,
  updatereservationsValidator,
  delereservationsValidator,
} = require("../utils/validators/reservationVaildator");
const router = express.Router();
const {
  getreservations,
  creatreservations,
  getreservationsId,
  updatereservations,
  delereservations,
} = require("../controller/reservationController");

router
  .route("/")
  .get( getreservations)
  .post(creatreservationsValidator, creatreservations);
router
  .route("/:id")
  .get(getreservationsValidator,getreservationsId)
  .put(updatereservationsValidator, updatereservations)
  .delete(delereservationsValidator, delereservations);

module.exports = router;
