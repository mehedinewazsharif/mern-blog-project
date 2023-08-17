// backend/models/blogPost.js
const mongoose = require('mongoose');

const blogPostSchema = new mongoose.Schema({
  title: String,
  content: String,
  author: String,
  createdAt: { type: Date, default: Date.now },
},
{ timestamps: true, versionKey:false }
);

module.exports = mongoose.model('blogposts', blogPostSchema);
