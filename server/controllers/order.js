const Order = require("../model/order");

const getOrders = async (req, res, next) => {
  const { id } = req.params;

  try {
    let resOrder;
    const orders = await Order.find({ user: id })
      .populate("user")
      .populate({
        path: "products",
        populate: {
          path: "product",
          model: "Product",
        },
      });

    if (orders) {
      resOrder = orders;
    } else {
      resOrder = [];
    }

    res.status(200).json(resOrder);
  } catch (e) {
    res.status(404).json(e);
  }
};

const getAllOrders = async (req, res) => {
  try {
    const orders = await Order.find({})
      .populate("user")
      .populate({
        path: "products",
        populate: {
          path: "product",
          model: "Product",
        },
      });
    res.status(200).json(orders);
  } catch (e) {
    res.status(404).json(e);
  }
};

const createOrders = async (req, res, next) => {
  const order = req.body;
  try {
    const newOrder = new Order(order);
    await newOrder.save();
    res.status(200).json(newOrder);
  } catch (e) {
    res.status(404).json(e);
  }
};

module.exports = { getOrders, createOrders, getAllOrders };
