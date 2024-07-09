import React, { useState } from 'react';
import { Provider } from 'react-redux';
import PostsDisplay from './components/PostsDisplay';
import CreatePost from './components/CreatePost';
import store from './redux/store';
import './App.css';

const App = () => {
  const [editPostId, setEditPostId] = useState(null);

  const handleEdit = (postId) => {
    setEditPostId(postId);
  };

  return (
    <Provider store={store}>
      <div className='app-bg'>
        <CreatePost editPostId={editPostId} />
        <PostsDisplay onEdit={handleEdit} />
      </div>
    </Provider>
  );
};

export default App;
