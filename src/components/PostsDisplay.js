// PostsDisplay.js
import React, { useEffect, useState } from 'react';
import {useDispatch } from 'react-redux';
import {editPost} from '../redux/actions';
import PostItem from './PostItem';
import "./PostDisplay.css";

const PostsDisplay = () => {
  const [fetchdata,setFetchdata]=useState([])
  const dispatch=useDispatch()
  
  async function getpost(){
    try{
      const response=await fetch('http://localhost:3001/api/posts')
const data= await response.json()
setFetchdata(data)

    }
    catch(err){
      console.log('err',err);
    }
  }

  const handleEdit = (id,updatedPost) => {
    dispatch(editPost(id,updatedPost))
    window.location.reload()
    .catch(error =>console.error('Error editing post:',error));
  }
  // console.log('Posts in PostsDisplay:',posts);

  

  useEffect(() => {
   getpost()
  }, []);

  console.log('Posts in PostsDisplay:', fetchdata); // Check if posts are correctly received

  if (!fetchdata) {
    return <p>Loading fetchdata...</p>;
  }

  if (fetchdata.length === 0) {
     return <p>No posts available</p>;
  }

  return (
    <div>
      <h2>All Posts</h2>
      <div className='posts-display'>
      {fetchdata.map(post => (
        <PostItem key={post.id} post={post} onEdit={handleEdit} />
      ))}
      </div>
    </div>
  );
};

export default PostsDisplay;
