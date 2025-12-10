const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  title: { type: String, required: true },
  slug: { type: String, index: true },
  description: { type: String },
  price: { type: Number, required: true },
  images: [{ url: String, public_id: String }],
  category: { type: mongoose.Schema.Types.ObjectId, ref: 'Category' },
  countInStock: { type: Number, default: 0 },
  rating: { type: Number, default: 0 },
  numReviews: { type: Number, default: 0 },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Product', productSchema);
