import { useEffect, useState } from "react";
import SwitchBtn from "../components/SwitchBtn";
import SwiperCardSlides from "../components/SwiperCardSlides";
import { fetchDataFromEndPoints } from "../helper";
import { END_POINTS } from "../endpoints";
import { store } from "../app/store.js";
import { setLoading } from "../features/loading/loadingSlice";
const TrendingTVShowsSection = ({ trendingTvData }) => {
  const [trendingTvShows, setTrendingTvShows] = useState({});
  const [switchTime, setSwitchTime] = useState("day");

  const handleChange = async (e) => {
    setSwitchTime(e);

    try {
      store.dispatch(setLoading(true));
      const data = await fetchDataFromEndPoints(
        END_POINTS.getTrendingMoviesAndTvShows("tv", e)
      );
      setTrendingTvShows(data);
    } catch (e) {
      store.dispatch(setLoading(true));
      console.error(e);
    } finally {
      store.dispatch(setLoading(false));
    }
  };

  useEffect(() => {
    setTrendingTvShows(trendingTvData);
  }, []);

  return (
    <section className="page-padding mt-10">
      <div className="flex justify-start flex-col lg:flex-row lg:items-center gap-4 lg:gap-8 mb-6">
        <h2 className="dark:text-slate-300 text-xl lg:text-2xl font-bold font-robotoSlab">
          Trending TV Shows
        </h2>
        <SwitchBtn switchTime={switchTime} handleChange={handleChange} />
      </div>
      <div>
        {trendingTvShows.results && trendingTvShows.results.length > 0 ? (
          <SwiperCardSlides movies={trendingTvShows.results} />
        ) : (
          <p>No trending movies yet</p>
        )}
      </div>
    </section>
  );
};

export default TrendingTVShowsSection;
