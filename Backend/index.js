require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const morgan = require('morgan');
const helmet = require('helmet');

const app = express();
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/house_of_salaka';

// Middleware
app.use(helmet());
app.use(cors()); // you can tighten this: app.use(cors({ origin: 'http://localhost:3000' }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan(process.env.NODE_ENV === 'production' ? 'combined' : 'dev'));

// MongoDB Connection
mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('MongoDB Connected'))
  .catch(err => {
    console.error('MongoDB Connection Error:', err);
    process.exit(1); // stop the app if DB connection fails
  });

// Order Schema
const orderSchema = new mongoose.Schema({
  customer: {
    firstName: { type: String, required: true },
    lastName: { type: String },
    email: { type: String, required: true },
    address: { type: String, required: true },
    city: String,
    zipCode: String,
  },
  items: [{
    name: String,
    price: Number,
    quantity: Number,
    color: String,
    size: String,
  }],
  total: Number,
  paymentMethod: String,
  date: { type: Date, default: Date.now }
}, { timestamps: true });

const Order = mongoose.model('Order', orderSchema);

// Routes
app.get('/', (req, res) => {
  res.send('House of Salaka API is running');
});

// Create order
app.post('/api/orders', async (req, res) => {
  try {
    const { customer, items, total, paymentMethod } = req.body;

    // Basic validation
    if (!customer || !customer.firstName || !customer.email || !customer.address) {
      return res.status(400).json({ message: 'Missing customer details' });
    }
    if (!items || !Array.isArray(items) || items.length === 0) {
      return res.status(400).json({ message: 'Order items required' });
    }

    const newOrder = new Order({
      customer,
      items,
      total,
      paymentMethod
    });

    await newOrder.save();
    res.status(201).json({ message: 'Order placed successfully', order: newOrder });
  } catch (error) {
    console.error('Error saving order:', error);
    res.status(500).json({ message: 'Server Error', error: error.message });
  }
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({ message: 'Route not found' });
});

// Graceful shutdown
const server = app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

process.on('SIGINT', () => {
  console.info('SIGINT received — closing HTTP server');
  server.close(() => {
    mongoose.connection.close(false, () => {
      console.log('MongoDb connection closed.');
      process.exit(0);
    });
  });
});
