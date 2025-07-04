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

module.exports = router;