const express = require("express");
const route = express.Router();
const coupon = require("../controllers/coupon.js");

route.get("/coupons", coupon.getCoupons);
route.get("/coupon/:id", coupon.getDetail);
route.post("/create", coupon.createCoupon);
route.put("/:id", coupon.editCoupon);
route.delete("/:id", coupon.deleteCoupon);

module.exports = route;
