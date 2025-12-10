const express = require('express');
const router = express.Router();
const protect = require('../middlewares/authMiddleware');
const admin = require('../middlewares/adminMiddleware');
const categoryController = require('../controllers/categoryController');

router.get('/', categoryController.getCategories);
router.post('/', protect, admin, categoryController.createCategory);
router.get('/:id', categoryController.getCategory);
router.put('/:id', protect, admin, categoryController.updateCategory);
router.delete('/:id', protect, admin, categoryController.deleteCategory);

module.exports = router;
