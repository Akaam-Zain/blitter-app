import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  post: [],
};

export const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    setPosts: (state, action) => {
      state.post = [action.payload];
      console.log(action.payload.data);
    },
  },
});

export const { setPosts } = postSlice.actions;

export default postSlice.reducer;
