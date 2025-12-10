const express = require('express');
const router = express.Router();
const upload = require('../middlewares/uploadMiddleware');
const protect = require('../middlewares/authMiddleware');
const uploadController = require('../controllers/uploadController');

router.post('/image', protect, upload.single('file'), uploadController.uploadImage);

module.exports = router;
