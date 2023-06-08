const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
    productName: { type: String, unique: true, required: true },
    productPrice: { type: Number, required: true },
    productCategory: { type: String, required: true },
    productImage: { type: String, required: true },
});

const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;