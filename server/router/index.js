const authRoute = require("./auth.js");
const productRoute = require("./product.js");
const orderRoute = require("./order.js");
const categoryRoute = require("./category.js");
const couponRoute = require("./coupon.js");

const router = (app) => {
  app.use("/auth", authRoute);
  app.use("/product", productRoute);
  app.use("/order", orderRoute);
  app.use("/category", categoryRoute);
  app.use("/coupon", couponRoute);
};

module.exports = router;
