import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  post: [],
};

export const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    setpost: (state, action) => {
      state.post = [action.payload];
      console.log(action.payload);
    },
  },
});

export const { setpost } = postSlice.actions;

export default postSlice.reducer;
