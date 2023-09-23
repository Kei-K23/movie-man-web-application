import { useEffect, useState } from "react";
import Search from "../components/Search";
import { useLoaderData } from "react-router-dom";
import { fetchDataFromEndPoints } from "../helper";
import { END_POINTS } from "../endpoints";
import ShowAllList from "../components/ShowAllList";
import { store } from "../app/store";
import { setLoading } from "../features/loading/loadingSlice";

const PopularTvShows = () => {
  const { data } = useLoaderData();

  const [results, setResults] = useState([]);
  const [currentPage, setCurrentPage] = useState(2);

  const handleClick = async () => {
    setCurrentPage((prev) => prev + 1);
    try {
      store.dispatch(setLoading(true));
      const data = await fetchDataFromEndPoints(
        END_POINTS.getDifferentCateMovies("tv", "popular", currentPage)
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
        text={"No popular tv shows yet!"}
        handleClick={handleClick}
      />
    </div>
  );
};

export default PopularTvShows;

export async function popularTvShowsLoader() {
  let data;
  try {
    store.dispatch(setLoading(true));
    data = await fetchDataFromEndPoints(
      END_POINTS.getDifferentCateMovies("tv", "popular", 1)
    );
  } catch (e) {
    store.dispatch(setLoading(true));

    console.error(e);
  } finally {
    store.dispatch(setLoading(false));
  }
  return { data };
}
