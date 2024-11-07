const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/authMiddleware');

// Protect admin dashboard route with the authMiddleware
router.get('/admin/dashboard', authMiddleware('Admin'), (req, res) => {
  res.json({ message: 'Welcome to the Admin Dashboard' });
});

module.exports = router;
