import { useEffect, useState } from "react";
import Search from "../components/Search";
import { useLoaderData } from "react-router-dom";
import { fetchDataFromEndPoints } from "../helper";
import { END_POINTS } from "../endpoints";
import ShowAllList from "../components/ShowAllList";
import { store } from "../app/store";
import { setLoading } from "../features/loading/loadingSlice";

const UpcomingMovies = () => {
  const { data } = useLoaderData();

  const [results, setResults] = useState([]);
  const [currentPage, setCurrentPage] = useState(2);

  const handleClick = async () => {
    setCurrentPage((prev) => prev + 1);
    try {
      store.dispatch(setLoading(true));
      const data = await fetchDataFromEndPoints(
        END_POINTS.getDifferentCateMovies("movie", "upcoming", currentPage)
      );
      setResults([...results, ...data.results]);
    } catch (e) {
      store.dispatch(setLoading(true));
      console.error(e);
    } finally {
      store.dispatch(setLoading(false));
    }
  };

  useEffect(() => {
    setResults(data.results);
  }, []);

  return (
    <div className="page-padding dark:bg-slate-900">
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
  let data;
  try {
    store.dispatch(setLoading(true));

    data = await fetchDataFromEndPoints(
      END_POINTS.getDifferentCateMovies("movie", "upcoming", 1)
    );
  } catch (e) {
    store.dispatch(setLoading(true));

    console.error(e);
  } finally {
    store.dispatch(setLoading(false));
  }
  return { data };
}
