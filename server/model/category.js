const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const categorySchema = mongoose.Schema(
  {
    title: { type: String },
    sub_category: [{ type: Schema.Types.ObjectId, ref: "SubCategory" }],
    tag: { type: String },
  },
  {
    timestamp: true,
  }
);

module.exports = mongoose.model("Category", categorySchema);
