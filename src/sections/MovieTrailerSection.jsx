import MoviesEffectCards from "../components/MoviesEffectCards";
import { useLazyGetTrendingMoviesQuery } from "../features/movieAPI/movieApi";
import { useEffect, useState } from "react";

const MovieTrailerSection = () => {
  const [getTrendingMovies, { error, isFetching }] =
    useLazyGetTrendingMoviesQuery();

  const [trendingMovies, setTrendingMovies] = useState({});

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
    <section className="h-[500px] relative">
      {isFetching ? (
        <p>fetching</p>
      ) : error ? (
        <p>Error</p>
      ) : trendingMovies.results ? (
        <MoviesEffectCards trendingMovies={trendingMovies.results} />
      ) : (
        <p>No trending movies yet</p>
      )}
    </section>
  );
};

export default MovieTrailerSection;
