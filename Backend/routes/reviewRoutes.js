const express = require('express');
const router = express.Router();
const protect = require('../middlewares/authMiddleware');
const { createReview } = require('../controllers/reviewController');

router.post('/:productId', protect, createReview);

module.exports = router;
