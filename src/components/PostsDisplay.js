// PostsDisplay.js
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPosts } from '../redux/actions';
import PostItem from './PostItem';

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
      {fetchdata.map(post => (
        <PostItem key={post.id} post={post} />
      ))}
    </div>
  );
};

export default PostsDisplay;
