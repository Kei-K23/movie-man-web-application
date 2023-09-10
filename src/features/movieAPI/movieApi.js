import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const movieAPI = createApi({
  reducerPath: "movieAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.themoviedb.org/3/",
    prepareHeaders: (headers) => {
      headers.set("accept", "application/json");
      headers.set(
        "Authorization",
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlZTQ2ZmJjZWFkYWNkZDE3ZDA2MDVhYzBiODViYTdiNiIsInN1YiI6IjY0YjNlNDdmMGU0ZmM4MDExZTA2YWRlMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.vvwKtb2IkseN1U_Mu2qFVudDRM1kZ4sRemXWlFp5a6c"
      );
      return headers;
    },
  }),

  endpoints: (builder) => ({
    getPopularMovies: builder.query({
      query: () =>
        "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
    }),
    getNowPlayingMovies: builder.query({
      query: () =>
        "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
    }),
    getTrendingMovies: builder.query({
      query: (params) =>
        `https://api.themoviedb.org/3/trending/movie/${params.time}?language=en-US`,
    }),
    getUpcomingMovies: builder.query({
      query: () =>
        "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",
    }),
    getTopRatedMovies: builder.query({
      query: () =>
        "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
    }),
    getPopularTvShows: builder.query({
      query: () =>
        "https://api.themoviedb.org/3/tv/popular?language=en-US&page=1",
    }),
    getAirTodayTvShows: builder.query({
      query: () =>
        "https://api.themoviedb.org/3/tv/airing_today?language=en-US&page=1",
    }),
    getTrendingTvShows: builder.query({
      query: (params) =>
        `https://api.themoviedb.org/3/trending/tv/${params.time}?language=en-US`,
    }),
  }),
});

export const {
  useLazyGetNowPlayingMoviesQuery,
  useLazyGetPopularMoviesQuery,
  useLazyGetTrendingMoviesQuery,
  useLazyGetUpcomingMoviesQuery,
  useLazyGetTopRatedMoviesQuery,
  useLazyGetAirTodayTvShowsQuery,
  useLazyGetPopularTvShowsQuery,
  useLazyGetTrendingTvShowsQuery,
} = movieAPI;
