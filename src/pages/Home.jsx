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
      {/* <div className={isLoading ? "block" : "hidden"}>
        <h2 className="text-4xl">Loading</h2>
      </div> */}

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
    trendingMoviesData = await fetchDataFromEndPoints(
      END_POINTS.getTrendingMoviesAndTvShows("movie", "day")
    );
    trendingTvData = await fetchDataFromEndPoints(
      END_POINTS.getTrendingMoviesAndTvShows("tv", "day")
    );
  } catch (err) {
    console.error("error", err.message);
  } finally {
    console.error("error");
  }
  return { trendingMoviesData, trendingTvData };
};
