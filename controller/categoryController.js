const CategoryModel = require("../models/categoryModels");
const factory = require("./handlerFactory");

//@desc    get list of categories
//@route   get /api/v1/categories
//@access  public
exports.getcategory = factory.getAll(CategoryModel);

//@desc   get specific category by idf
//@route  GET api/v1/categories/:id
//@access Public
exports.getcategories = factory.getOneId(CategoryModel);
//@desc     Creat category
//@route    post /api/v1/categories
//@access   private
exports.creatCategory = factory.creatOne(CategoryModel);

//@desc   update specific category by id
//@route  PUT api/v1/categories/:id
//@access Private
exports.updateCategory = factory.updateOne(CategoryModel);

//@desc   Delete specific category by id
//@route  Delete api/v1/categories/:id
//@access Private
exports.delecategories = factory.deleteOne(CategoryModel);
