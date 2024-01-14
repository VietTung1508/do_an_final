const express = require("express");
const route = express.Router();
const category = require("../controllers/category.js");

route.get("/categories", category.getCategories);
route.get("/category/:id", category.getDetail);
route.post("/create", category.createCategory);
route.delete("/:id", category.deleteCategory);
route.put("/:id", category.editCategory);

module.exports = route;
