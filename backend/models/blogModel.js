const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    category: String,
    imgUrl: String,
    author: {
        name: String,
        userId: String,
        profilePhoto: String,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    }

})

module.exports = mongoose.model("Blog", blogSchema);