const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const orderSchema = mongoose.Schema(
  {
    products: [
      {
        product: { type: Schema.Types.ObjectId, ref: "Product" },
        quantity: { type: Number },
      },
    ],
    user: { type: Schema.Types.ObjectId, ref: "User" },
    payment: { type: String },
    total: { type: Number },
    pending: { type: Boolean },
  },
  {
    timestams: true,
  }
);

module.exports = mongoose.model("Order", orderSchema);
