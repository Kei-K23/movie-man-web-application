import { useEffect, useState } from "react";
import SwitchBtn from "../components/SwitchBtn";
import SwiperCardSlides from "../components/SwiperCardSlides";
import { fetchDataFromEndPoints } from "../helper";
import { END_POINTS } from "../endpoints";

const TrendingTVShowsSection = ({ trendingTvData }) => {
  const [trendingTvShows, setTrendingTvShows] = useState({});
  const [switchTime, setSwitchTime] = useState("day");

  const handleChange = async (e) => {
    setSwitchTime(e);

    const data = await fetchDataFromEndPoints(
      END_POINTS.getTrendingMoviesAndTvShows("tv", e)
    );
    setTrendingTvShows(data);
  };

  useEffect(() => {
    setTrendingTvShows(trendingTvData);
  }, []);

  return (
    <section className="page-padding my-10">
      <div className="flex items-center gap-10 mb-6">
        <h2 className="text-xl lg:text-2xl font-bold font-robotoSlab">
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
