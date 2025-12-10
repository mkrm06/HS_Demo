const express = require('express');
const router = express.Router();
const protect = require('../middlewares/authMiddleware');
const admin = require('../middlewares/adminMiddleware');
const blogController = require('../controllers/blogController');

router.get('/', blogController.getBlogs);
router.post('/', protect, admin, blogController.createBlog);
router.get('/:id', blogController.getBlog);
router.delete('/:id', protect, admin, blogController.deleteBlog);

module.exports = router;
