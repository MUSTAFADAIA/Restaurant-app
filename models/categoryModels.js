const mongoose = require("mongoose");



const CategorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "please enter category"],
      unique: [true, "category must be unique"],
      maxlength: [30, "name cant exceed more than {max} characters"],
      minlength: [3, "Name should have at least {min} character"],
    },
    
  },
  { timestamps: true }
);


const CategoryModel = mongoose.model("Category", CategorySchema);
module.exports = CategoryModel;