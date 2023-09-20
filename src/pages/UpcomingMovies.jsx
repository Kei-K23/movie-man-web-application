import { useEffect, useState } from "react";
import Search from "../components/Search";
import { useLoaderData } from "react-router-dom";
import { fetchDataFromEndPoints } from "../helper";
import { END_POINTS } from "../endpoints";
import ShowAllList from "../components/ShowAllList";

const UpcomingMovies = () => {
  const { data } = useLoaderData();

  const [results, setResults] = useState([]);
  const [currentPage, setCurrentPage] = useState(2);

  const handleClick = async () => {
    setCurrentPage((prev) => prev + 1);

    const data = await fetchDataFromEndPoints(
      END_POINTS.getDifferentCateMovies("movie", "upcoming", currentPage)
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
        text={"No upcoming movies yet!"}
        handleClick={handleClick}
      />
    </div>
  );
};

export default UpcomingMovies;

export async function upcomingMoviesLoader() {
  const data = await fetchDataFromEndPoints(
    END_POINTS.getDifferentCateMovies("movie", "upcoming", 1)
  );
  return { data };
}
