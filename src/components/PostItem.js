// PostItem.js
import React, {useState} from 'react';
import './PostItem.css'; // Import the CSS file for styling
import './PostEdit.css';
const PostItem = ({ post, onEdit}) => {
  const [isEditing,setIsEditing] = useState(false);
  const [updatedTitle, setUpdatedTitle] = useState(post.title);
  const [updatedContent, setUpdatedContent] = useState(post.content);
  //const { title, content } = post;
  
  
  const handleSave = () =>{
    onEdit(post.id, {title:updatedTitle, content: updatedContent});
    
    setIsEditing(false);
  };
  if(isEditing){
    return(
      <div className='edit-form'>
        <input 
        type = "text"
        value= {updatedTitle}
        onChange={(e) => setUpdatedTitle(e.target.value)}
        />
        <textarea
        value={updatedContent}
        onChange={(e) => setUpdatedContent(e.target.value)}
        />
        <button onClick={handleSave}>Save</button>
        <button onClick={() => setIsEditing(false)}>Cancel</button>
      </div>
    );
  }
  return (
    <div className="post-item">
      <h3 className="post-title">{post.title}</h3>
      <p className="post-content">{post.content}</p>
      <div className="post-actions">
        {/* Action buttons (edit and delete) can be added here */}
        <button className="edit-button" onClick={() => setIsEditing(true)}>Edit</button>
        <button className="delete-button">Delete</button>
      </div>
    </div>
  );
};

export default PostItem;
