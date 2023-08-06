const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please add a name"]
    },
    email: {
        type: String,
        required: [true, "Please add an email"],
        unique: true
    },
    city: {
        type: String,
        required: [true, "Please add a city"]
    },
    address: {
        type: String,
        required: [true, "Please add a address"]
    },
    items: {
        type: String,
        required: [true]
    },
    total: {
        type: Number,
        required: [true]
    }
},
{
    timestamps: true
});

module.exports = mongoose.model("Order", OrderSchema)