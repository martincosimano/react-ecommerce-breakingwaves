const asyncHandler = require('express-async-handler');
const Order = require('../models/orderModel');

// @desc Register order
// @route POST /api/orders/register
// @access Public
const registerOrder = asyncHandler(async (req, res) => {
    const {name, email, city, address, items, total } = req.body;

    const order = await Order.create( {
        name,
        email,
        city,
        address,
        items,
        total
    })

    if (order) {
        res.status(201).json({
            _id: order.id,
            name: order.name,
            email: order.email,
            city: order.city,
            address: order.address,
            items: order.items,
            total: order.total
        })
    } else {
        res.status(400);
        throw new Error('Invalid order data');
    }
})

// @desc Get order data
// @route GET /api/orders/admin
// @access Private
const getOrders = asyncHandler(async (req, res) => {
        try {
            const order = await Order.find();
            res.json(order);
        }catch (err) {
            console.error(err)
        }
})

module.exports = {
    registerOrder,
    getOrders
}