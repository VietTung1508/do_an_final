const express = require("express");
const route = express.Router();
const order = require("../controllers/order.js");

route.get("/orders/:id", order.getOrders);
route.get("/allOrders", order.getAllOrders);
route.post("/create", order.createOrders);

module.exports = route;
