import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PostForm = ({ currentPost, setCurrentPost, fetchPosts }) => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    useEffect(() => {
        if (currentPost) {
            setTitle(currentPost.title);
            setContent(currentPost.content);
        } else {
            setTitle('');
            setContent('');
        }
    }, [currentPost]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (currentPost) {
            // Update existing post
            await axios.put(`http://localhost:5000/api/posts/${currentPost._id}`, {
                title,
                content,
            });
        } else {
            // Create new post
            await axios.post('http://localhost:5000/api/posts', {
                title,
                content,
            });
        }
        setTitle('');
        setContent('');
        setCurrentPost(null);
        fetchPosts(); // Refresh the post list
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Title:</label>
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                />
            </div>
            <div>
                <label>Content:</label>
                <textarea
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    required
                />
            </div>
            <button type="submit">{currentPost ? 'Update Post' : 'Create Post'}</button>
            {currentPost && <button onClick={() => setCurrentPost(null)}>Cancel</button>}
        </form>
    );
};

export default PostForm;