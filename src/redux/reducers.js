// src/redux/reducers.js

const initialState = {
    posts: [{ id: 1, title: 'Post 1', content: 'Content of Post 1' },
        { id: 2, title: 'Post 2', content: 'Content of Post 2' },], // This is where the posts array is stored
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
  