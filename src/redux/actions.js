// actions.js



// actions.js
export const fetchPosts = () => async (dispatch) => {
    try {
      const response = await fetch('http://localhost:3001/api/posts'
      );
      if (!response.ok) {
        throw new Error('Failed to fetch posts');
      }
      const data = await response.json();
      console.log('this id data',data)
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
      const data = await response.json();
      dispatch({ type: 'ADD_POST_SUCCESS', payload: data });
    } catch (error) {
      console.error('Error adding post:', error);
      dispatch({ type: 'ADD_POST_FAILURE', payload: error.message });
    }
  };
  
  // reducers.js
  const initialState = {
    posts: [],
    loading: false,
    error: null,
  };
  
  const postsReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'FETCH_POSTS_SUCCESS':
        return {
          ...state,
          posts: action.payload,
          loading: false,
          error: null,
        };
      case 'FETCH_POSTS_FAILURE':
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      case 'ADD_POST_SUCCESS':
        return {
          ...state,
          posts: [...state.posts, action.payload],
          loading: false,
          error: null,
        };
      case 'ADD_POST_FAILURE':
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default postsReducer;
  