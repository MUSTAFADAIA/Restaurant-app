const { check, body } = require("express-validator");
const validatorMiddleware = require("../../Middleware/validatorMiddleware");
const { default: slugify } = require("slugify");

exports.creatreservationsValidator = [
 // check("user")
  //  .notEmpty()
  //  .withMessage("Reservations must be belong to a user")
   // .isMongoId()
   // .withMessage("Invalid ID formate"),

  check("restaurant")
    .notEmpty()
    .withMessage("Reservations must be belong to a restaurant")
    .isMongoId()
    .withMessage("Invalid ID formate"),

  check("notes").custom((val, { req }) => {
    req.body.slug = slugify(val);
    return true;
  }),

  validatorMiddleware,
];

exports.getreservationsValidator = [
  check("id").isMongoId().withMessage("invalid reservation id"),
  validatorMiddleware,
];

exports.updatereservationsValidator = [
  check("id").isMongoId().withMessage("invalid reservation id"),
  body("notes")
    .optional()
    .custom((val, { req }) => {
      req.body.slug = slugify(val);
      return true;
    }),

  validatorMiddleware,
];

exports.delereservationsValidator = [
  check("id").isMongoId().withMessage("invalid reservations id"),
  validatorMiddleware,
];
