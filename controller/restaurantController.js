const restaurantsModels = require("../models/restaurantsModels");
const factory = require("./handlerFactory");
const { uploadSingleImage } = require("../Middleware/uploadImageMiddleware");
const asyncHandler = require("express-async-handler");
const { v4: uuidv4 } = require("uuid");

exports.uploadPostImage = uploadSingleImage("image");

exports.resizeImage = asyncHandler(async (req, res, next) => {
  const filename = `restaurant-${uuidv4()}-${Date.now()}.jpeg`;
  // await sharp(req.file.buffer)
  //   .resize(600, 600)
  //   .toFormat("jpeg")
  //   .jpeg({ quality: 90 })
  //   .toFile(`uploads/brands/${filename}`);

  //Save image into our db
  req.body.image = filename;
  next();
});

exports.status = (...status) =>
  asyncHandler(async (req, res, next) => {
    if (role.includes(req.post.status)) {
      return next(new ApiError("error status", 403));
    }
    next();
  });




//@desc    get list of restaurant
//@route   get /api/v1/restaurant
//@access  public
exports.getRestaurant = factory.getAll(restaurantsModels);

//@desc   get specific restauranty by idf
//@route  GET api/v1/restauranties/:id
//@access Public
exports.getRestaurantId = factory.getOneId(restaurantsModels);
//@desc     Creat restauranty
//@route    post /api/v1/restauranties
//@access   private
exports.creatRestaurant = factory.creatOne(restaurantsModels);


//@desc   update specific restauranty by id
//@route  PUT api/v1/restauranties/:id
//@access Private
exports.updateRestaurant = factory.updateOne(restaurantsModels);

//@desc   Delete specific restauranty by id
//@route  Delete api/v1/restauranties/:id
//@access Private
exports.deleRestaurant = factory.deleteOne(restaurantsModels);
