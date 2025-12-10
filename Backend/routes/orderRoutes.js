const express = require('express');
const router = express.Router();
const protect = require('../middlewares/authMiddleware');
const admin = require('../middlewares/adminMiddleware');
const orderController = require('../controllers/orderController');

router.post('/', protect, orderController.createOrder);
router.get('/myorders', protect, orderController.getMyOrders);
router.get('/:id', protect, orderController.getOrderById);
router.get('/', protect, admin, orderController.getAllOrders);
router.put('/:id/pay', protect, orderController.updateOrderToPaid);

module.exports = router;
