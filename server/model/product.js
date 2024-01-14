const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productScheme = mongoose.Schema(
  {
    title: { type: String, require: true },
    category: { type: String, require: true },
    price: { type: Number, require: true, require: true },
    price_sale: { type: Number, default: null },
    isSale: { type: Boolean, default: false },
    desc: { type: String },
    image: {
      url: { type: String },
      filename: { type: String },
    },
    size: [{ type: String }],
    color: [{ type: String }],
    status: { type: Boolean },
  },
  {
    timestams: true,
  }
);

module.exports = mongoose.model("Product", productScheme);
