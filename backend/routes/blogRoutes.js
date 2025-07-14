require("dotenv").config();
const express = require("express");
const router = express.Router();
const Blog = require("../models/blogModel")

// to create a blog
router.post("/", async (req, res) => {
    try {
        const newBlog = new Blog(req.body);
        const savedBlog = await newBlog.save();
        res.status(201).json(savedBlog);
    } catch (err) {
        res.status(500).json({ err: "Failed to save journal" });
    }
})
// to fetch blogs data
router.get("/", async (req, res) => {
    try {
        const blogs = await Blog.find().sort({ createdAt: -1 });
        res.json(blogs);
    } catch (err) {
        res.status(500).json({ error: "Error in fetching blogs" })
    }
})
// to delete a blog
router.delete("/:id", async (req, res) => {
    try {
        await Blog.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: "Blog deleted" })
    } catch (error) {
        res.status(500).json({ error: "Failed to delete blog" })
    }
})
// to update a blog
router.put("/:id", async (req, res) => {
    try {
        const updatedBlog = await Blog.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(updatedBlog);
    } catch (error) {
        res.status(500).json({ error: "Failed to update" })
    }
})

// to add a comment
router.post("/:id/comments", async (req, res) => {
    try {
        const blog = await Blog.findById(req.params.id);
        blog.comments.push({ userProfile: req.body.userProfile, userName: req.body.userName, comment: req.body.comment });
        await blog.save();
        res.status(200).json({ message: "Comment added" })
    } catch (error) {
        res.status(500).json({ error: "Failed to add the comment" })
    }
})

// to bookmark a post
router.post("/:id/bookmark", async (req, res) => {
    const { userId } = req.body;
    try {
        const blog = await Blog.findById(req.params.id);
        const isBookmarked = blog.bookmarkedBy.includes(userId);

        if (isBookmarked) {
            // remove bookmark
            blog.bookmarkedBy = blog.bookmarkedBy.filter((id) => id !== userId);
        } else {
            // add bookmark
            blog.bookmarkedBy.push(userId);
        }

        await blog.save();
        res.status(200).json({ succes: true, isBookmarked: !isBookmarked });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
})

module.exports = router;