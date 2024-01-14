const express = require("express");
const route = express.Router();
const product = require("../controllers/product.js");
const multer = require("multer");
const { storage } = require("../cloudinary/index.js");
const upload = multer({ storage });

route.get("/products", product.getProducts);
route.get("/allProducts", product.getAllProducts);
route.get("/allProducts/:category", product.getAllProductsByCategory);
route.get("/products/newest", product.getNewest);
route.get("/products/:category", product.getProductByCategory);
route.get("/product/:id", product.detail);
route.post("/create", upload.single("image"), product.createProduct);
route.get("/search/:q", product.search);
route.put("/:id", product.editProduct);
route.delete("/:id", product.deleteProduct);

module.exports = route;
