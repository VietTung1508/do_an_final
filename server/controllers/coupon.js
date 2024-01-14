const Coupon = require("../model/coupon");

const getCoupons = async (req, res, next) => {
  try {
    const coupons = await Coupon.find({});
    res.status(200).json(coupons);
  } catch (e) {
    res.status(500).json(e);
  }
};

const getDetail = async (req, res, next) => {
  const { id } = req.params;

  try {
    const couponDetail = await Coupon.findById(id);

    res.status(200).json(couponDetail);
  } catch (e) {
    res.status(500).json(e);
  }
};

const createCoupon = async (req, res, next) => {
  const coupon = req.body;
  try {
    const newCoupon = new Coupon({
      ...coupon,
    });

    await newCoupon.save();
    res.status(200).json(newCoupon);
  } catch (e) {}
};

const editCoupon = async (req, res, next) => {
  const { id } = req.params;
  const editedCoupon = req.body;

  try {
    await Coupon.findByIdAndUpdate(id, editedCoupon);
    res.status(200).json({ msg: "Update Successfully" });
  } catch (e) {
    res.status(500).json(e);
  }
};
const deleteCoupon = async (req, res, next) => {
  const { id } = req.params;
  try {
    await Coupon.findByIdAndDelete(id);
    res.status(200).json({ msg: "Delete Successfully" });
  } catch (e) {
    res.status(500).json(e);
  }
};

module.exports = {
  getCoupons,
  createCoupon,
  editCoupon,
  deleteCoupon,
  getDetail,
};
