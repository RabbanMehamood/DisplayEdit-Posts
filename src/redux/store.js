import { configureStore } from '@reduxjs/toolkit';
import postsReducer from './postsSlice'; // Adjust path as needed

const store = configureStore({
  reducer: {
    posts: postsReducer,
    // Other reducers if any
  },
});

export default store;
