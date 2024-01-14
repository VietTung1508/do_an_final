const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const subCategorySchema = Schema(
  {
    title: { type: String, require: true },
  },
  {
    timestamp: true,
  }
);

module.exports = mongoose.model("SubCategory", subCategorySchema);
