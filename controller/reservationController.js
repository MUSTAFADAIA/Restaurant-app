const reservationsModels = require("../models/reservationsModels");
const factory = require("./handlerFactory");

//@desc    get list of reservations
//@route   get /api/v1/reservations
//@access  public
exports.getreservations = factory.getAll(reservationsModels);

//@desc   get specific reservations by idf
//@route  GET api/v1/reservations/:id
//@access Public
exports.getreservationsId = factory.getOneId(reservationsModels);
//@desc     Creat reservations
//@route    post /api/v1/reservations
//@access   private
exports.creatreservations = factory.creatOne(reservationsModels);

//@desc   update specific reservations by id
//@route  PUT api/v1/reservations/:id
//@access Private
exports.updatereservations = factory.updateOne(reservationsModels);

//@desc   Delete specific reservations by id
//@route  Delete api/v1/reservations/:id
//@access Private
exports.delereservations = factory.deleteOne(reservationsModels);
