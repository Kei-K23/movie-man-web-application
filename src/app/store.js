import { configureStore } from "@reduxjs/toolkit";

import loadingSlice from "../features/loading/loadingSlice";

export const store = configureStore({
  reducer: loadingSlice,
});
