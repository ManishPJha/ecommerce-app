const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
    title: {
        type: String,
    },
    description: {
        type: String,
    },
    price: {
        type: Number,
    },
    rating: {
        type: String,
    },
    image: {
        type: String,
    },
    createDate: {
        type: Date,
        default: Date.now,
    },
    modifiedDate: {
        type: Date,
        default: Date.now
    }
})

module.exports = Product = mongoose.model("Product", productSchema);