const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    role: {
        type: String,
        required: true,
        default: "public",
    },
    firstName: {
        type: String,
    },
    lastName: {
        type: String,
    },
    email: {
        type: String,
    },
    password: {
        type: String,
    },
    createDate: {
        type: Date,
        default: Date.now()
    },
    modifiedDate: {
        type: Date,
        default: Date.now()
    }
})

module.exports = users = mongoose.model("users", userSchema);