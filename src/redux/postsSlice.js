import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  posts: [],
  loading: false,
  error: null,
};

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    fetchPostsSuccess(state, action) {
      state.posts = action.payload;
      state.loading = false;
      state.error = null;
    },
    fetchPostsFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
    addPostSuccess(state, action) {
      state.posts.push(action.payload);
      state.loading = false;
      state.error = null;
    },
    addPostFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { fetchPostsSuccess, fetchPostsFailure, addPostSuccess, addPostFailure } = postsSlice.actions;
export default postsSlice.reducer;
