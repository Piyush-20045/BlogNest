require("dotenv").config();
const express = require("express");
const router = express.Router();
const Blog = require("../models/blogModel")

router.post("/", async(req, res) => {
    try{
        const newBlog = new Blog(req.body);
        const savedBlog = await newBlog.save();
        res.status(201).json(savedBlog);
    } catch(err) {
        res.status(500).json({err: "Failed to save journal"});
    }
})
// to fetch blogs data
router.get("/", async(req, res) => {
    try{
        const blogs = await Blog.find().sort({ createdAt: -1});
        res.json(blogs);
    }catch(err){
        res.status(500).json({ error:"Error in fetching blogs"})
    }
})



module.exports = router;