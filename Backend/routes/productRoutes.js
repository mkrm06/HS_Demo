const express = require('express');
const router = express.Router();
const protect = require('../middlewares/authMiddleware');
const admin = require('../middlewares/adminMiddleware');
const productController = require('../controllers/productController');

router.get('/', productController.getProducts);
router.post('/', protect, admin, productController.createProduct);
router.get('/:id', productController.getProduct);
router.put('/:id', protect, admin, productController.updateProduct);
router.delete('/:id', protect, admin, productController.deleteProduct);

module.exports = router;
