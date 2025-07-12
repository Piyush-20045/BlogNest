const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema({
    userName: String,
    comment: String,
    userProfile: String,
    createdAt: {
        type: Date,
        default: Date.now,
    }
});

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
    },
    comments: [commentSchema],
})

module.exports = mongoose.model("Blog", blogSchema);