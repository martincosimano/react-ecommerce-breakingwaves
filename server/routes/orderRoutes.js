const express = require("express");
const router = express.Router();
const { 
    registerOrder,
    getOrders
} = require('../controllers/orderController');
const {protect} = require('../middleware/authMiddleware');

router.post('/register', registerOrder);
router.get('/admin', getOrders)

module.exports = router;