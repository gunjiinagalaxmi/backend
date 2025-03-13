import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Post from './Post';

const PostList = ({ onEdit }) => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            const res = await axios.get('http://localhost:5000/api/posts');
            setPosts(res.data);
        };
        fetchPosts();
    }, []);

    const handleDelete = async (id) => {
        await axios.delete(`http://localhost:5000/api/posts/${id}`);
        setPosts(posts.filter(post => post._id !== id));
    };

    return (
        <div>
            {posts.map(post => (
                <Post key={post._id} post={post} onEdit={onEdit} onDelete={handleDelete} />
            ))}
        </div>
    );
};

export default PostList;