import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Main from "./Layout/Main";
import ErrorPage from "./pages/ErrorPage";
import Home, { HomeLoader } from "./pages/Home";
import PopularMovies, { popularMoviesLoader } from "./pages/PopularMovies";
import NowPlayingMovies, {
  nowPlayingMoviesLoader,
} from "./pages/NowPlayingMovies";
import UpcomingMovies, { upcomingMoviesLoader } from "./pages/UpcomingMovies";
import TopRatedMovies, { topRatedMoviesLoader } from "./pages/TopRatedMovies";
import AirTodayTvShows, {
  airTodayTvShowsLoader,
} from "./pages/AirTodayTvShows";
import PopularTvShows, { popularTvShowsLoader } from "./pages/PopularTvShows";
import OnTheAirTvShows, {
  onTheAirTvShowsLoader,
} from "./pages/OnTheAirTvShows";
import TopRatedTvShows, {
  topRatedTvShowsLoader,
} from "./pages/TopRatedTvShows";
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
        loader: HomeLoader,
      },
      {
        path: "movie/popular",
        element: <PopularMovies />,
        loader: popularMoviesLoader,
      },
      {
        path: "movie/now_playing",
        element: <NowPlayingMovies />,
        loader: nowPlayingMoviesLoader,
      },
      {
        path: "movie/upcoming",
        element: <UpcomingMovies />,
        loader: upcomingMoviesLoader,
      },
      {
        path: "movie/top_rated",
        element: <TopRatedMovies />,
        loader: topRatedMoviesLoader,
      },
      {
        path: "tv/popular",
        element: <PopularTvShows />,
        loader: popularTvShowsLoader,
      },
      {
        path: "tv/air_today",
        element: <AirTodayTvShows />,
        loader: airTodayTvShowsLoader,
      },
      {
        path: "tv/on_air",
        element: <OnTheAirTvShows />,
        loader: onTheAirTvShowsLoader,
      },
      {
        path: "tv/top_rated",
        element: <TopRatedTvShows />,
        loader: topRatedTvShowsLoader,
      },
      {
        path: "movie_id/:id",
        element: <MovieDetail />,
        loader: movieDetailLoader,
      },
      {
        path: "tv_id/:id",
        element: <TvDetail />,
        loader: tvDetailLoader,
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
