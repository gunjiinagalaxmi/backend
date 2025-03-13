// src/App.js
import React, { useState, useEffect } from 'react';
import PostList from './components/PostList';
import PostForm from './components/PostForm';
import axios from 'axios';

const App = () => {
    const [posts, setPosts] = useState([]);
    const [currentPost, setCurrentPost] = useState(null);

    // Fetch posts from the backend
    const fetchPosts = async () => {
        const res = await axios.get('http://localhost:5000/api/posts');
        setPosts(res.data);
    };

    useEffect(() => {
        fetchPosts();
    }, []);

    return (
        <div>
            <h1>Blog Posts</h1>
            <PostForm currentPost={currentPost} setCurrentPost={setCurrentPost} fetchPosts={fetchPosts} />
            <PostList posts={posts} onEdit={setCurrentPost} />
        </div>
    );
};

export default App;