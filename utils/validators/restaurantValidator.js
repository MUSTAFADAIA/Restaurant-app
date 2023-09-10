const { check, body } = require("express-validator");
const validatorMiddleware = require("../../Middleware/validatorMiddleware");
const { default: slugify } = require("slugify");

exports.creatRestaurantValidator = [
  check("name")
    .notEmpty()
    .withMessage("Restaurant requerd")
    .isLength({ min: 3 })
    .withMessage("too short Restaurant name")
    .isLength({ max: 30 })
    .withMessage("too long Restaurant name")
    .custom((val, { req }) => {
      req.body.slug = slugify(val);
      return true;
    }),

  check("category")
    .notEmpty()
    .withMessage("Restaurant must be belong to a category")
    .isMongoId()
    .withMessage("Invalid ID formate"),

  check("city")
    .notEmpty()
    .withMessage("Restaurant requerd")
    .custom((val, { req }) => {
      req.body.slug = slugify(val);
      return true;
    }),
  check("image")
    .optional(),
    // .withMessage("images should be array of string"),

  validatorMiddleware,
];

exports.getRestaurantValidator = [
  check("id").isMongoId().withMessage("invalid restaurant id"),
  validatorMiddleware,
];

exports.updateRestaurantValidator = [
  check("id").isMongoId().withMessage("invalid Restaurant id"),
  body("name")
    .optional()
    .custom((val, { req }) => {
      req.body.slug = slugify(val);
      return true;
    }),
  body("city")
    .optional()
    .custom((val, { req }) => {
      req.body.slug = slugify(val);
      return true;
    }),

  validatorMiddleware,
];

exports.deleRestaurantValidator = [
  check("id").isMongoId().withMessage("invalid restaurant id"),
  validatorMiddleware,
];
