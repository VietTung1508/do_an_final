const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = mongoose.Schema(
  {
    username: { type: String, required: true },
    password: { type: String, required: true, select: false },
    email: { type: String, required: true, unique: true },
    phone: { type: Number },
    address: { type: String },
  },
  {
    timestams: true,
  }
);

module.exports = mongoose.model("User", userSchema);
