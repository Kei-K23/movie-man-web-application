import { useLoaderData } from "react-router-dom";
import { END_POINTS } from "../endpoints";
import { fetchDataFromEndPoints } from "../helper";
import HeroSection from "../sections/HeroSection";
import MovieTrailerSection from "../sections/MovieTrailerSection";
import TrendingMovieSection from "../sections/TrendingMovieSection";
import TrendingTVShowsSection from "../sections/TrendingTVShowsSection";
import { store } from "../app/store.js";
import { setLoading } from "../features/loading/loadingSlice";
const Home = () => {
  const { trendingMoviesData, trendingTvData } = useLoaderData();

  return (
    <>
      <HeroSection />
      <TrendingMovieSection trendingMoviesData={trendingMoviesData} />
      <MovieTrailerSection trendingMoviesData={trendingMoviesData} />
      <TrendingTVShowsSection trendingTvData={trendingTvData} />
    </>
  );
};

export default Home;

export const HomeLoader = async () => {
  let trendingMoviesData;
  let trendingTvData;

  try {
    store.dispatch(setLoading(true));
    trendingMoviesData = await fetchDataFromEndPoints(
      END_POINTS.getTrendingMoviesAndTvShows("movie", "day")
    );
    trendingTvData = await fetchDataFromEndPoints(
      END_POINTS.getTrendingMoviesAndTvShows("tv", "day")
    );
  } catch (err) {
    store.dispatch(setLoading(true));
    console.error("error", err.message);
  } finally {
    store.dispatch(setLoading(false));
    console.error("error");
  }
  return { trendingMoviesData, trendingTvData };
};
