const Product = require("../models/product");

exports.createproduct = async (req, res) => {
  const data = req.body;
  const product = new Product(data);
  await product.save();
  res.status(200).json(product);
};

exports.getallProducts = async (req, res) => {
  const product = await Product.find();
  res.status(200).json(product);
};

exports.getSingleProduct = async (req, res) => {
  const id = req.params.id;
  const product = await Product.findById(id);
  res.status(200).json(product);
};

exports.updateProduct = async (req, res) => {
  const id = req.params.id;
  const data = req.body;
  const product = await Product.findByIdAndUpdate(id, data);
  res.status(200).json(product);
};

exports.deleteProduct = async (req, res) => {
  const id = req.params.id;
  const product = await Product.findByIdAndDelete(id);
  res.status(200).json(product);
};
