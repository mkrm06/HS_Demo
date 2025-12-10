const asyncHandler = require('express-async-handler');
const Wishlist = require('../models/Wishlist');

exports.getWishlist = asyncHandler(async (req, res) => {
  const wl = await Wishlist.findOne({ user: req.user._id }).populate('products');
  if (!wl) return res.json({ products: [] });
  res.json(wl);
});

exports.addToWishlist = asyncHandler(async (req, res) => {
  const { productId } = req.body;
  let wl = await Wishlist.findOne({ user: req.user._id });
  if (!wl) {
    wl = await Wishlist.create({ user: req.user._id, products: [productId] });
  } else {
    if (!wl.products.includes(productId)) wl.products.push(productId);
    await wl.save();
  }
  res.json(wl);
});

exports.removeFromWishlist = asyncHandler(async (req, res) => {
  const { productId } = req.params;
  const wl = await Wishlist.findOne({ user: req.user._id });
  if (!wl) { res.status(404); throw new Error('Wishlist not found'); }
  wl.products = wl.products.filter(p => p.toString() !== productId);
  await wl.save();
  res.json(wl);
});
