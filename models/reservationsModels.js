const mongoose = require("mongoose");

const reservationSchema = mongoose.Schema(
  {
    user: {
      type:[Array],
        //mongoose.Schema.Types.ObjectId,
      ref: "user",
    },
    restaurant: {
      type: [Array],
       // mongoose.Schema.Types.ObjectId,
      ref: "restaurant",
    },
    date: Date,

    notes: {
      type: String,
      minlength: [3, "too short produect title"],
      maxlength: [100, "too long product title"],
    },
  },
  { timestamps: true }
);

// reservationSchema.pre(/^find/, function (next) {
//   this.populate({ path:"users", select: "email" }).populate({
//     path: "restaurants",
//     select: "name",
//   });
//   next();
// });

module.exports = mongoose.model("reservation", reservationSchema);
