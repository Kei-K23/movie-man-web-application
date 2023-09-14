import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Main from "./Layout/Main";
import ErrorPage from "./pages/ErrorPage";
import Home from "./pages/Home";
import PopularMovies from "./pages/PopularMovies";
import NowPlayingMovies from "./pages/NowPlayingMovies";
import UpcomingMovies from "./pages/UpcomingMovies";
import TopRatedMovies from "./pages/TopRatedMovies";
import AirTodayTvShows from "./pages/AirTodayTvShows";
import PopularTvShows from "./pages/PopularTvShows";
import OnTheAirTvShows from "./pages/OnTheAirTvShows";
import TopRatedTvShows from "./pages/TopRatedTvShows";
import MovieDetail, { movieDetailLoader } from "./pages/MovieDetail";
import TvDetail, { tvDetailLoader } from "./pages/TvDetail";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "movie/popular",
        element: <PopularMovies />,
      },
      {
        path: "movie/now_playing",
        element: <NowPlayingMovies />,
      },
      {
        path: "movie/upcoming",
        element: <UpcomingMovies />,
      },
      {
        path: "movie/top_rated",
        element: <TopRatedMovies />,
      },
      {
        path: "tv/popular",
        element: <PopularTvShows />,
      },
      {
        path: "tv/air_today",
        element: <AirTodayTvShows />,
      },
      {
        path: "tv/on_air",
        element: <OnTheAirTvShows />,
      },
      {
        path: "tv/top_rated",
        element: <TopRatedTvShows />,
      },
      {
        path: "movie_id/:id",
        loader: movieDetailLoader,
        element: <MovieDetail />,
      },
      {
        path: "tv_id/:id",
        loader: tvDetailLoader,
        element: <TvDetail />,
      },
    ],
  },
]);

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
