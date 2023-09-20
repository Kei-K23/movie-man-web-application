import { useLoaderData } from "react-router-dom";
import { END_POINTS } from "../endpoints";
import { fetchDataFromEndPoints } from "../helper";
import HeroSection from "../sections/HeroSection";
import MovieTrailerSection from "../sections/MovieTrailerSection";
import TrendingMovieSection from "../sections/TrendingMovieSection";
import TrendingTVShowsSection from "../sections/TrendingTVShowsSection";

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

export async function homeLoader() {
  const trendingMoviesData = await fetchDataFromEndPoints(
    END_POINTS.getTrendingMoviesAndTvShows("movie", "day")
  );
  const trendingTvData = await fetchDataFromEndPoints(
    END_POINTS.getTrendingMoviesAndTvShows("tv", "day")
  );
  return { trendingMoviesData, trendingTvData };
}
