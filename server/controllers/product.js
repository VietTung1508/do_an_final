const Product = require("../model/product");
const Category = require("../model/category");

const getAllProducts = async (req, res, next) => {
  try {
    const products = await Product.find({});
    res.status(200).json(products);
  } catch (e) {
    res.status(500).json(e);
  }
};

const getAllProductsByCategory = async (req, res, next) => {
  const { category } = req.params;

  try {
    const products = await Product.find({
      category: new RegExp(category, "i"),
    });
    res.status(200).json(products);
  } catch (e) {
    res.status(500).json(e);
  }
};

const getProducts = async (req, res, next) => {
  const { page = 0 } = req.query;
  try {
    const products = await Product.find({})
      .limit(16)
      .skip(16 * (page - 1));
    res.status(200).json(products);
  } catch (e) {
    res.status(500).json(e);
  }
};

const getNewest = async (req, res) => {
  try {
    const products = await Product.find({}).sort({ _id: -1 }).limit(16);
    res.status(200).json(products);
  } catch (e) {
    res.status(500).json(e);
  }
};

const getProductByCategory = async (req, res) => {
  const { category } = req.params;
  const { page = 0 } = req.query;
  try {
    const products = await Product.find({
      category: new RegExp(category, "i"),
    })
      .limit(16)
      .skip(16 * (page - 1));
    res.status(200).json(products);
  } catch (e) {
    res.status(500).json(e);
  }
};

const createProduct = async (req, res, next) => {
  const product = req.body;

  try {
    if (!req.file) {
      res.status(500).json({ msg: "Cannot create post without Image" });
    }

    const img = {
      url: req.file.path,
      filename: req.file.filename,
    };

    const newProduct = new Product({
      ...product,
      image: img,
    });

    await newProduct.save();
    res.status(200).json("Create Product Successfully");
  } catch (e) {}
};

const search = async (req, res, next) => {
  const { q } = req.params;

  try {
    const categories = await Category.find({ title: new RegExp(q, "i") }).limit(
      5
    );

    res.status(200).json(categories);
  } catch (e) {
    res.status(500).json(e);
  }
};

const detail = async (req, res, next) => {
  const { id } = req.params;

  try {
    const productDetail = await Product.findById(id);

    res.status(200).json(productDetail);
  } catch (e) {
    res.status(500).json(e);
  }
};

const editProduct = async (req, res, next) => {
  const { id } = req.params;
  const newProduct = req.body;
  try {
    await Product.findOneAndUpdate({ _id: id }, newProduct);

    res.status(200).json("Upadate Product Successfully");
  } catch (e) {
    res.status(500).json(e);
  }
};

const deleteProduct = async (req, res, next) => {
  const { id } = req.params;
  try {
    await Product.findOneAndDelete({ _id: id });
    res.status(200).json("Delete Product Successfully");
  } catch (e) {
    res.status(500).json(e);
  }
};

module.exports = {
  getProducts,
  createProduct,
  editProduct,
  deleteProduct,
  search,
  detail,
  getNewest,
  getProductByCategory,
  getAllProducts,
  getAllProductsByCategory,
};
