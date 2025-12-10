const asyncHandler = require('express-async-handler');
const Product = require('../models/Product');

exports.createProduct = asyncHandler(async (req, res) => {
  const { title, description, price, category, countInStock } = req.body;
  const product = new Product({
    title, description, price, category, countInStock
  });
  await product.save();
  res.status(201).json(product);
});

exports.getProducts = asyncHandler(async (req, res) => {
  const { keyword, category } = req.query;
  const filter = {};
  if (keyword) filter.title = { $regex: keyword, $options: 'i' };
  if (category) filter.category = category;
  const products = await Product.find(filter).populate('category');
  res.json(products);
});

exports.getProduct = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id).populate('category');
  if (!product) {
    res.status(404);
    throw new Error('Product not found');
  }
  res.json(product);
});

exports.updateProduct = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (!product) { res.status(404); throw new Error('Product not found'); }
  const updates = ['title','description','price','countInStock','category'];
  updates.forEach(k => { if (req.body[k] !== undefined) product[k] = req.body[k]; });
  await product.save();
  res.json(product);
});

exports.deleteProduct = asyncHandler(async (req, res) => {
  await Product.findByIdAndDelete(req.params.id);
  res.json({ message: 'Product removed' });
});
