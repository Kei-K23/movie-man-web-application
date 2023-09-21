import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
};

export const loadingSlice = createSlice({
  name: "loadingSlice",
  initialState,
  reducers: {
    setLoading: (state, action) => {
      if (action.payload === true) {
        state.isLoading = false;
      } else {
        state.isLoading = true;
      }
    },
  },
});

export const { setLoading } = loadingSlice.actions;

export default loadingSlice.reducer;
