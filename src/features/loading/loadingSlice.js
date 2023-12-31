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
        state.isLoading = true;
      } else {
        state.isLoading = false;
      }
    },
  },
});

export const { setLoading } = loadingSlice.actions;

export default loadingSlice.reducer;
