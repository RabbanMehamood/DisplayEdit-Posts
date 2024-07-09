export const fetchPosts = () => async (dispatch) => {
  try {
    const response = await fetch('http://localhost:3001/api/posts');
    if (!response.ok) {
      throw new Error('Failed to fetch posts');
    }
    const data = await response.json();
    console.log('this is data', data);
    dispatch({ type: 'FETCH_POSTS_SUCCESS', payload: data });
  } catch (error) {
    console.error('Error fetching posts:', error);
    dispatch({ type: 'FETCH_POSTS_FAILURE', payload: error.message });
  }
};

export const addPost = (postData) => async (dispatch) => {
  try {
    const response = await fetch('http://localhost:3001/api/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(postData),
    });
    if (!response.ok) {
      throw new Error('Failed to add post');
    }
    const data = await response.json();
    console.log(data)
    dispatch({ type: 'ADD_POST_SUCCESS', payload: data });
  } catch (error) {
    console.error('Error adding post:', error);
    dispatch({ type: 'ADD_POST_FAILURE', payload: error.message });
  }
};

export const editPost = (id, updatedPost) => async (dispatch) => {
  try {
    const response = await fetch(`http://localhost:3001/api/posts/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedPost),
    });
    if (!response.ok) {
      throw new Error('Failed to edit post');
    }
    const data = await response.json();
    dispatch({ type: 'EDIT_POST_SUCCESS', payload: data });
  } catch (error) {
    console.error('Error editing post:', error);
    dispatch({ type: 'EDIT_POST_FAILURE', payload: error.message });
  }
};
