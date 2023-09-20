import { useEffect, useState } from "react";
import Search from "../components/Search";
import { useLoaderData } from "react-router-dom";
import { END_POINTS } from "../endpoints";
import { fetchDataFromEndPoints } from "../helper";
import ShowAllList from "../components/ShowAllList";

const OnTheAirTvShows = () => {
  const { data } = useLoaderData();

  const [results, setResults] = useState([]);
  const [currentPage, setCurrentPage] = useState(2);

  const handleClick = async () => {
    setCurrentPage((prev) => prev + 1);

    const data = await fetchDataFromEndPoints(
      END_POINTS.getDifferentCateMovies("tv", "on_the_air", currentPage)
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
        text={"No on air tv shows yet!"}
        handleClick={handleClick}
      />
    </div>
  );
};

export default OnTheAirTvShows;

export async function onTheAirTvShowsLoader() {
  const data = await fetchDataFromEndPoints(
    END_POINTS.getDifferentCateMovies("tv", "on_the_air", 1)
  );
  return { data };
}
