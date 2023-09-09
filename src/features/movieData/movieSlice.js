// import { createSlice } from "@reduxjs/toolkit";
// import { useLazyGetTrendingMoviesQuery } from "../movieAPI/movieApi";

// const initialState = {
//   trendingMovie: [],
// };

// const UseLazyGetTrendingMovies = () => {
//   const [getTrendingMovies, { error, isFetching }] =
//     useLazyGetTrendingMoviesQuery();
//   return { getTrendingMovies, error, isFetching };
// };

// export const movieSlice = createSlice({
//   name: "movieSlice",
//   initialState,
//   reducers: {
//     getTrendingMovies: async (state, action) => {
//       const { getTrendingMovies } = UseLazyGetTrendingMovies();
//       const { data } = await getTrendingMovies(action.payload);
//       state.trendingMovie.push(data);
//     },
//   },
// });

// export const { getTrendingMovies } = movieSlice.actions;

// export default movieSlice.reducer;
