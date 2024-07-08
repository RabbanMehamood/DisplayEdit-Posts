// PostItem.js
import React from 'react';
import './PostItem.css'; // Import the CSS file for styling

const PostItem = ({ post }) => {
  const { title, content } = post;

  const onEdit=function(){
    
  }

  return (
    <div className="post-item">
      <h3 className="post-title">{title}</h3>
      <p className="post-content">{content}</p>
      <div className="post-actions">
        {/* Action buttons (edit and delete) can be added here */}
        <button className="edit-button" onclick="onEdit">Edit</button>
        <button className="delete-button" onclick="onDelete">Delete</button>
      </div>
    </div>
  );
};

export default PostItem;
