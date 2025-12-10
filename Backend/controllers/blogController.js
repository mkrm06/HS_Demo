const asyncHandler = require('express-async-handler');
const Blog = require('../models/Blog');

exports.createBlog = asyncHandler(async (req, res) => {
  const { title, content } = req.body;
  const blog = await Blog.create({ title, content, author: req.user._id });
  res.status(201).json(blog);
});

exports.getBlogs = asyncHandler(async (req, res) => {
  const blogs = await Blog.find().populate('author', 'name');
  res.json(blogs);
});

exports.getBlog = asyncHandler(async (req, res) => {
  const blog = await Blog.findById(req.params.id).populate('author', 'name');
  if (!blog) { res.status(404); throw new Error('Blog not found'); }
  res.json(blog);
});

exports.deleteBlog = asyncHandler(async (req, res) => {
  await Blog.findByIdAndDelete(req.params.id);
  res.json({ message: 'Blog removed' });
});
