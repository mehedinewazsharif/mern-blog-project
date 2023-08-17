// backend/routes/api.js
const express = require('express');
const router = express.Router();
const BlogPost = require('../models/blogPost');

router.get('/posts', async (req, res) => {
  const posts = await BlogPost.find();
  res.json(posts);
});

router.get('/posts/:id', async (req, res) => {
  const post = await BlogPost.findById(req.params.id);
  res.json(post);
});



// Implement other routes for creating, updating, and deleting blog posts

//create route

router.post('/posts', async (req, res) => {
  const { title, content, author } = req.body;
  const newPost = new BlogPost({ title, content, author });
  try {
    const savedPost = await newPost.save();
    res.json(savedPost);
  } catch (error) {
    res.status(500).json({ error: 'Error creating post' });
  }
});


//update route

router.put('/posts/:id', async (req, res) => {
  try {
    const updatedPost = await BlogPost.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(updatedPost);
  } catch (error) {
    res.status(500).json({ error: 'Error updating post' });
  }
});


//delete route


router.delete('/posts/:id', async (req, res) => {
  try {
    await BlogPost.findByIdAndDelete(req.params.id);
    res.json({ message: 'Post deleted' });
  } catch (error) {
    res.status(500).json({ error: 'Error deleting post' });
  }
});





module.exports = router;
