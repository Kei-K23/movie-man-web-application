import { useEffect, useState } from "react";
import Search from "../components/Search";
import { useLoaderData } from "react-router-dom";
import { END_POINTS } from "../endpoints";
import { fetchDataFromEndPoints } from "../helper";
import ShowAllList from "../components/ShowAllList";
import { store } from "../app/store.js";
import { setLoading } from "../features/loading/loadingSlice";
const OnTheAirTvShows = () => {
  const { data } = useLoaderData();

  const [results, setResults] = useState([]);
  const [currentPage, setCurrentPage] = useState(2);

  const handleClick = async () => {
    setCurrentPage((prev) => prev + 1);
    try {
      store.dispatch(setLoading(true));
      const data = await fetchDataFromEndPoints(
        END_POINTS.getDifferentCateMovies("tv", "on_the_air", currentPage)
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
        text={"No on air tv shows yet!"}
        handleClick={handleClick}
      />
    </div>
  );
};

export default OnTheAirTvShows;

export async function onTheAirTvShowsLoader() {
  let data;
  try {
    store.dispatch(setLoading(true));
    data = await fetchDataFromEndPoints(
      END_POINTS.getDifferentCateMovies("tv", "on_the_air", 1)
    );
  } catch (e) {
    store.dispatch(setLoading(true));

    console.error(e);
  } finally {
    store.dispatch(setLoading(false));
  }
  return { data };
}
