import { useEffect, useState } from "react";
import Search from "../components/Search";
import { useLoaderData } from "react-router-dom";
import { fetchDataFromEndPoints } from "../helper";
import { END_POINTS } from "../endpoints";
import ShowAllList from "../components/ShowAllList";

const TopRatedMovies = () => {
  const { data } = useLoaderData();

  const [results, setResults] = useState([]);
  const [currentPage, setCurrentPage] = useState(2);

  const handleClick = async () => {
    setCurrentPage((prev) => prev + 1);

    const data = await fetchDataFromEndPoints(
      END_POINTS.getDifferentCateMovies("movie", "top_rated", currentPage)
    );

    setResults([...results, ...data.results]);
  };

  useEffect(() => {
    setResults(data.results);
  }, []);

  return (
    <div className="page-padding ">
      <Search />
      <ShowAllList
        results={results}
        text={"No top rated movies yet!"}
        handleClick={handleClick}
      />
    </div>
  );
};

export default TopRatedMovies;

export async function topRatedMoviesLoader() {
  const data = await fetchDataFromEndPoints(
    END_POINTS.getDifferentCateMovies("movie", "top_rated", 1)
  );
  return { data };
}
