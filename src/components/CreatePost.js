import React, { useState } from 'react';
// import uuid from 'react-uuid';
import './CreatePost.css'; // Import the CSS file for styling

const CreatePost = () => { 
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Prepare post data
    const postData = {  
      title,
      content,
    };

    try {
      // Make POST request to backend API
      const response = await fetch('http://localhost:3001/api/posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(postData),
      });
      window.location.reload()

      if (!response.ok) {
        throw new Error('Failed to create post');
    }
        

      // Reset form fields after successful submission

      setContent('');
      setTitle('')
   

      console.log('Post created successfully:', postData);
    } catch (error) {
      console.error('Error creating post:', error);
    }
  };

  return (
    <div className="create-post-form">
      <h2>Create New Post</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="content">Content</label>
          <textarea
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            rows={5}
            required
          ></textarea>
        </div>
        <button type="submit" className="submit-button">Submit</button>
      </form>
    </div>
  );
};

export default CreatePost;
