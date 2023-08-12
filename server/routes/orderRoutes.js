const express = require("express");
const router = express.Router();
const { 
    registerOrder,
    getOrders
} = require('../controllers/orderController');
const { protect, isAdmin } = require('../middleware/authMiddleware');

router.post('/register', registerOrder);
router.get('/admin', protect, isAdmin, getOrders)

module.exports = router;