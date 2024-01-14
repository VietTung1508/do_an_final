const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const couponSchema = mongoose.Schema(
  {
    title: { type: String },
    desc: { type: String },
    percentage: { type: Number },
  },
  {
    timestams: true,
  }
);

module.exports = mongoose.model("Coupon", couponSchema);
