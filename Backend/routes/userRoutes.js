const express = require('express');
const router = express.Router();
const protect = require('../middlewares/authMiddleware');
const admin = require('../middlewares/adminMiddleware');
const {
  getUsers, getUserById, updateUser, deleteUser
} = require('../controllers/userController');

router.use(protect);
router.get('/', admin, getUsers);
router.get('/:id', admin, getUserById);
router.put('/:id', admin, updateUser);
router.delete('/:id', admin, deleteUser);

module.exports = router;
