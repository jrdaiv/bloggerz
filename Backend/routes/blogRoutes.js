const express = require('express');
const Blog = require('../models/Blog');
const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const { title, content, author } = req.body;
    const newBlog = new Blog({ title, content, author });
    await newBlog.save();
    res.status(201).json(newBlog);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.get('/', async (req, res) => {
    try {
        const blogs = await Blog.find('author', 'username');
        res.json(blogs);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
})

module.exports = router;