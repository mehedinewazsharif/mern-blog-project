// frontend/src/components/SingleBlogPost.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function SingleBlogPost() {
  const [post, setPost] = useState({});
  const { id } = useParams();

  useEffect(() => {
    axios.get(`http://localhost:8000/api/posts/${id}`).then((response) => {
      setPost(response.data);
    });
  }, [id]);

  return (
    <div>
      <div className="container">
            <h2>{post.title}</h2>
            <p>{post.content}</p>
            <p>Author: {post.author}</p>
      </div>
    </div>
  );
}

export default SingleBlogPost;
