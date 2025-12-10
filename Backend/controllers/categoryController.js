const asyncHandler = require('express-async-handler');
const Category = require('../models/Category');

exports.createCategory = asyncHandler(async (req, res) => {
  const { name, description } = req.body;
  const existing = await Category.findOne({ name });
  if (existing) {
    res.status(400);
    throw new Error('Category already exists');
  }
  const category = await Category.create({ name, description });
  res.status(201).json(category);
});

exports.getCategories = asyncHandler(async (req, res) => {
  const categories = await Category.find();
  res.json(categories);
});

exports.getCategory = asyncHandler(async (req, res) => {
  const category = await Category.findById(req.params.id);
  if (!category) {
    res.status(404);
    throw new Error('Category not found');
  }
  res.json(category);
});

exports.updateCategory = asyncHandler(async (req, res) => {
  const category = await Category.findById(req.params.id);
  if (!category) {
    res.status(404);
    throw new Error('Category not found');
  }
  category.name = req.body.name || category.name;
  category.description = req.body.description || category.description;
  await category.save();
  res.json(category);
});

exports.deleteCategory = asyncHandler(async (req, res) => {
  await Category.findByIdAndDelete(req.params.id);
  res.json({ message: 'Category removed' });
});
