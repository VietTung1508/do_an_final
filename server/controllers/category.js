const Category = require("../model/category");

const getCategories = async (req, res, next) => {
  try {
    const categories = await Category.find({});
    res.status(200).json(categories);
  } catch (e) {
    res.status(500).json(e);
  }
};

const getDetail = async (req, res, next) => {
  const { id } = req.params;

  try {
    const categoryDetail = await Category.findById(id);

    res.status(200).json(categoryDetail);
  } catch (e) {
    res.status(500).json(e);
  }
};

const createCategory = async (req, res, next) => {
  const category = req.body;
  try {
    const newCategory = new Category({
      ...category,
    });
    await newCategory.save();
    res.status(200).json("Create Category Successfully");
  } catch (e) {}
};

const editCategory = async (req, res, next) => {
  const { id } = req.params;
  const editedCategory = req.body;
  try {
    await Category.findOneAndUpdate({ _id: id }, editedCategory);
    res.status(200).json({ msg: "Update Successfully" });
  } catch (e) {
    res.status(500).json(e);
  }
};

const deleteCategory = async (req, res, next) => {
  const { id } = req.params;
  try {
    await Category.findByIdAndDelete(id);
    res.status(200).json({ msg: "Delete Successfully" });
  } catch (e) {
    res.status(500).json(e);
  }
};

module.exports = {
  getCategories,
  createCategory,
  editCategory,
  deleteCategory,
  getDetail,
};
