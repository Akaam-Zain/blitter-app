import { createSlice } from "@reduxjs/toolkit";

export const postSlice = createSlice({
  name: "post",
  initialState: [],
  reducers: {
    setPosts: (state, action) => {
      return [...state, ...action.payload];
    },
  },
});

export const { setPosts } = postSlice.actions;

export default postSlice.reducer;
