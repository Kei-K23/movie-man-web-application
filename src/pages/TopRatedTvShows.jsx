import { useEffect, useState } from "react";
import Search from "../components/Search";
import Card from "../components/Card";
import { useLazyGetTopRatedTvShowsQuery } from "../features/movieAPI/movieApi";
import { Link } from "react-router-dom";

const TopRatedTvShows = () => {
  const [getTopRatedTvShows, { error, isFetching }] =
    useLazyGetTopRatedTvShowsQuery();

  const [popularMovies, setPopularMovies] = useState([
    {
      adult: false,
      backdrop_path: "",
      genre_ids: [],
      id: 0,
      original_language: "",
      original_title: "",
      overview: "",
      popularity: 0,
      poster_path: "",
      release_date: "",
      title: "",
      video: false,
      vote_average: 0,
      vote_count: 0,
    },
  ]);
  const [currentPage, setCurrentPage] = useState(2);

  const handleRequest = async () => {
    const { data } = await getTopRatedTvShows({
      page: 1,
    });
    setPopularMovies(data.results);
  };

  const handleClick = async () => {
    setCurrentPage((prev) => prev + 1);

    const { data } = await getTopRatedTvShows({
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
                <Link to={`/tv_id/${popularMovie.id}`} key={popularMovie.id}>
                  <Card
                    poster_path={popularMovie.poster_path}
                    title={popularMovie.name}
                    release_date={popularMovie.first_air_date}
                  />
                </Link>
              ))}
            </div>
            <button onClick={handleClick}>Load More</button>
          </div>
        ) : (
          <p>No air today tv shows yet</p>
        )}
      </div>
    </div>
  );
};

export default TopRatedTvShows;
