import { useEffect, useState } from "react";
import { useLazyGetTopRatedMoviesQuery } from "../features/movieAPI/movieApi";
import Search from "../components/Search";
import Card from "../components/Card";
import { Link } from "react-router-dom";

const TopRatedMovies = () => {
  const [getTopRatedMovies, { error, isFetching }] =
    useLazyGetTopRatedMoviesQuery();

  const [popularMovies, setPopularMovies] = useState(null);
  const [currentPage, setCurrentPage] = useState(2);
  const handleRequest = async () => {
    const { data } = await getTopRatedMovies({
      page: 1,
    });

    setPopularMovies(data.results);
  };

  const handleClick = async () => {
    setCurrentPage(currentPage + 1);

    const { data } = await getTopRatedMovies({
      page: currentPage,
    });

    setPopularMovies([...popularMovies, ...data.results]);
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
          <div>
            <div className="grid gap-8 grid-cols-2 lg:grid-cols-5">
              {popularMovies.map((popularMovie) => (
                <Link to={`/movie_id/${popularMovie.id}`} key={popularMovie.id}>
                  <Card
                    poster_path={popularMovie.poster_path}
                    title={popularMovie.title}
                    release_date={popularMovie.release_date}
                  />
                </Link>
              ))}
            </div>
            <button onClick={handleClick}>Load More</button>
          </div>
        ) : (
          <p>No Top raged movies yet</p>
        )}
      </div>
    </div>
  );
};

export default TopRatedMovies;
