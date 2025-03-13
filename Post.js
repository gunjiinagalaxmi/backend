import React from 'react';

const Post = ({ post, onEdit, onDelete }) => {
    return (
        <div>
            <h2>{post.title}</h2>
            <p>{post.content}</p>
            <button onClick={() => onEdit(post)}>Edit</button>
            <button onClick={() => onDelete(post._id)}>Delete</button>
        </div>
    );
};

export default Post;