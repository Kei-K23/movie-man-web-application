import { useEffect, useState } from "react";

import SwiperCardSlides from "../components/SwiperCardSlides";
import SwitchBtn from "../components/SwitchBtn";
import { fetchDataFromEndPoints } from "../helper";
import { END_POINTS } from "../endpoints";
import { store } from "../app/store.js";
import { setLoading } from "../features/loading/loadingSlice";
const TrendingMovieSection = ({ trendingMoviesData }) => {
  const [trendingMovies, setTrendingMovies] = useState({});
  const [switchTime, setSwitchTime] = useState("day");

  const handleChange = async (e) => {
    setSwitchTime(e);
    try {
      store.dispatch(setLoading(true));

      const data = await fetchDataFromEndPoints(
        END_POINTS.getTrendingMoviesAndTvShows("movie", e)
      );
      setTrendingMovies(data);
    } catch (e) {
      store.dispatch(setLoading(true));

      console.error(e);
    } finally {
      store.dispatch(setLoading(false));
    }
  };

  useEffect(() => {
    setTrendingMovies(trendingMoviesData);
  }, []);

  return (
    <section className="page-padding my-10">
      <div className="flex justify-start flex-col lg:flex-row lg:items-center gap-4 lg:gap-8 mb-6">
        <h2 className="text-xl lg:text-2xl font-bold font-robotoSlab">
          Trending Movies
        </h2>
        <SwitchBtn switchTime={switchTime} handleChange={handleChange} />
      </div>
      <div>
        {trendingMovies.results && trendingMovies.results.length > 0 ? (
          <SwiperCardSlides movies={trendingMovies.results} />
        ) : (
          <p>No trending movies yet</p>
        )}
      </div>
    </section>
  );
};

export default TrendingMovieSection;
