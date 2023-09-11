const mongoose = require("mongoose");

const restaurantSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "please enter category"],
      unique: [true, "category must be unique"],
      maxlength: [30, "name cant exceed more than {max} characters"],
      minlength: [3, "Name should have at least {min} character"],
    },
     category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "category",
    },
   
    city: {
      type: String,
      required: [true, "please enter category"],
    },
    image: String,
  },
  { timestamps: true }
);

const setImageURL = (doc) => {
  if (doc.image) {
    const imageUrl = `${process.env.BASE_URL}/restaurant/${doc.image}`;
    doc.image = imageUrl;
  }
};

//getone ,getAll,update
restaurantSchema.post("init", (doc) => {
  setImageURL(doc);
});

//ceate
restaurantSchema.post("save", (doc) => {
  setImageURL(doc);
});


module.exports = mongoose.model("restaurant", restaurantSchema);
