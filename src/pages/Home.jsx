import HeroSection from "../sections/HeroSection";
import MovieTrailerSection from "../sections/MovieTrailerSection";
import TrendingMovieSection from "../sections/TrendingMovieSection";
import TrendingTVShowsSection from "../sections/TrendingTVShowsSection";

const Home = () => {
  return (
    <>
      <HeroSection />
      <TrendingMovieSection />
      <MovieTrailerSection />
      <TrendingTVShowsSection />
    </>
  );
};

export default Home;
