import MoviesEffectCards from "../components/MoviesEffectCards";
import { useState } from "react";

const MovieTrailerSection = ({ trendingMoviesData }) => {
  const [currentMovieSlide, setCurrentMovieSlide] = useState(0);

  return (
    <section className="min-h-[800px] lg:m-auto lg:max-w-[88%] lg:min-h-[1000px] relative lg:flex lg:justify-between lg:items-center lg:px-20">
      <div className="relative z-20 top-4 ">
        {trendingMoviesData.results && trendingMoviesData.results.length > 0 ? (
          <MoviesEffectCards
            setCurrentMovieSlide={setCurrentMovieSlide}
            trendingMovies={trendingMoviesData.results}
          />
        ) : (
          <p>No trending movies yet</p>
        )}
      </div>
      <div className="layer"></div>
      <img
        className="absolute top-0 left-0 w-full h-full"
        src={`https://image.tmdb.org/t/p/w500/${
          trendingMoviesData &&
          trendingMoviesData.results[currentMovieSlide].poster_path
        }`}
        alt={
          trendingMoviesData &&
          trendingMoviesData.results[currentMovieSlide].title
        }
      />
      <div className="lg:w-2/5 relative z-20 text-white px-6 top-4">
        <h2 className="font-bold text-lg lg:text-2xl">
          {trendingMoviesData &&
            trendingMoviesData.results[currentMovieSlide].title}
        </h2>
        <h3 className="text-slate-200 font-medium lg:text-xl">
          {trendingMoviesData &&
            trendingMoviesData.results[currentMovieSlide].release_date}
        </h3>
        <p className="text-slate-200 font-medium mt-3 lg:text-xl">
          {trendingMoviesData &&
            trendingMoviesData.results[currentMovieSlide].overview}
        </p>
      </div>
    </section>
  );
};

export default MovieTrailerSection;
