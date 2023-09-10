import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Main from "./Layout/Main";
import ErrorPage from "./pages/ErrorPage";
import Home from "./pages/Home";
import PopularMovies from "./pages/PopularMovies";
import NowPlayingMovies from "./pages/NowPlayingMovies";
import UpcomingMovies from "./pages/UpcomingMovies";
import TopRatedMovies from "./pages/TopRatedMovies";
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
