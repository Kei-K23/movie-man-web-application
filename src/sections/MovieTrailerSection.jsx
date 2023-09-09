import MoviesEffectCards from "../components/MoviesEffectCards";
import { useLazyGetTrendingMoviesQuery } from "../features/movieAPI/movieApi";
import { useEffect, useState } from "react";

const MovieTrailerSection = () => {
  const [getTrendingMovies, { error, isFetching }] =
    useLazyGetTrendingMoviesQuery();

  const [trendingMovies, setTrendingMovies] = useState(null);
  const [currentMovieSlide, setCurrentMovieSlide] = useState(0);

  const handleRequest = async () => {
    const { data } = await getTrendingMovies({
      time: "day",
    });

    setTrendingMovies(data);
  };

  useEffect(() => {
    handleRequest();
  }, []);
  return (
    <section className="max-h-[700px] relative lg:flex lg:justify-between lg:items-center lg:px-20">
      <div className="relative z-20 top-4 ">
        {isFetching ? (
          <p>fetching</p>
        ) : error ? (
          <p>Error</p>
        ) : trendingMovies && trendingMovies.results ? (
          <MoviesEffectCards
            setCurrentMovieSlide={setCurrentMovieSlide}
            trendingMovies={trendingMovies.results}
          />
        ) : (
          <p>No trending movies yet</p>
        )}
      </div>
      <div className="layer"></div>
      <img
        className="absolute top-0 left-0 w-full h-full"
        src={`https://image.tmdb.org/t/p/w500/${
          trendingMovies &&
          trendingMovies.results[currentMovieSlide].poster_path
        }`}
        alt={trendingMovies && trendingMovies.results[currentMovieSlide].title}
      />
      <div className="lg:w-2/5 relative z-20 text-white px-6 top-4">
        <h2 className="font-bold text-lg lg:text-2xl">
          {trendingMovies && trendingMovies.results[currentMovieSlide].title}
        </h2>
        <h3 className="text-slate-200 font-medium lg:text-xl">
          {trendingMovies &&
            trendingMovies.results[currentMovieSlide].release_date}
        </h3>
        <p className="text-slate-200 font-medium mt-3 lg:text-xl">
          {trendingMovies && trendingMovies.results[currentMovieSlide].overview}
        </p>
      </div>
    </section>
  );
};

export default MovieTrailerSection;
