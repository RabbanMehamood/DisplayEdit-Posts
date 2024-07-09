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
    case 'EDIT_POST_SUCCESS':
      return {
        ...state,
        posts: state.posts.map(post =>
          post.id === action.payload.id ? action.payload : post
        ),
        loading: false,
        error: null,
      };
    case 'EDIT_POST_FAILURE':
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
