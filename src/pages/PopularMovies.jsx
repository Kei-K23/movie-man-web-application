import { useEffect, useState } from "react";
import { useLazyGetPopularMoviesQuery } from "../features/movieAPI/movieApi";
import Card from "../components/Card";
import Search from "../components/Search";

const PopularMovies = () => {
  const [getPopularMovies, { error, isFetching }] =
    useLazyGetPopularMoviesQuery();

  const [popularMovies, setPopularMovies] = useState(null);

  const handleRequest = async () => {
    const { data } = await getPopularMovies();

    setPopularMovies(data.results);
  };

  useEffect(() => {
    handleRequest();
  }, []);
  return (
    <div className="page-padding ">
      <Search />
      <div className="mt-8">
        {isFetching ? (
          <p>fetching</p>
        ) : error ? (
          <p>Error</p>
        ) : popularMovies && popularMovies ? (
          <div className="grid gap-8 grid-cols-2 lg:grid-cols-5">
            {popularMovies.map((popularMovie) => (
              <Card
                key={popularMovie.id}
                poster_path={popularMovie.poster_path}
                title={popularMovie.title}
                release_date={popularMovie.release_date}
              />
            ))}
          </div>
        ) : (
          <p>No Popular movies yet</p>
        )}
      </div>
    </div>
  );
};

export default PopularMovies;
