import { useEffect, useState } from "react";
import Search from "../components/Search";
import { useLoaderData } from "react-router-dom";
import { fetchDataFromEndPoints } from "../helper";
import { END_POINTS } from "../endpoints";
import ShowAllList from "../components/ShowAllList";

const AirTodayTvShows = () => {
  const { data } = useLoaderData();

  const [results, setResults] = useState([]);
  const [currentPage, setCurrentPage] = useState(2);

  const handleClick = async () => {
    setCurrentPage((prev) => prev + 1);

    const data = await fetchDataFromEndPoints(
      END_POINTS.getDifferentCateMovies("tv", "airing_today", currentPage)
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
        text={"No air today tv shows yet!"}
        handleClick={handleClick}
      />
    </div>
  );
};

export default AirTodayTvShows;

export async function airTodayTvShowsLoader() {
  const data = await fetchDataFromEndPoints(
    END_POINTS.getDifferentCateMovies("tv", "airing_today", 1)
  );
  return { data };
}
