import { configureStore } from "@reduxjs/toolkit";

import { movieAPI } from "../features/movieAPI/movieApi";

export const store = configureStore({
  reducer: {
    [movieAPI.reducerPath]: movieAPI.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(movieAPI.middleware),
});
