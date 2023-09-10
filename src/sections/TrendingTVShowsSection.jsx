import { useEffect, useState } from "react";
import { useLazyGetTrendingTvShowsQuery } from "../features/movieAPI/movieApi";
import SwitchBtn from "../components/SwitchBtn";
import SwiperCardSlides from "../components/SwiperCardSlides";

const TrendingTVShowsSection = () => {
  const [getTrendingMovies, { error, isFetching }] =
    useLazyGetTrendingTvShowsQuery();

  const [trendingTvShows, setTrendingTvShows] = useState({});
  const [switchTime, setSwitchTime] = useState("day");

  const handleRequest = async () => {
    const { data } = await getTrendingMovies({
      time: switchTime,
    });

    setTrendingTvShows(data);
  };

  useEffect(() => {
    handleRequest();
  }, [switchTime]);

  return (
    <section className="page-padding my-10">
      <div className="flex items-center gap-10 mb-6">
        <h2 className="text-xl lg:text-2xl font-bold font-robotoSlab">
          Trending TV Shows
        </h2>
        <SwitchBtn switchTime={switchTime} setSwitchTime={setSwitchTime} />
      </div>
      <div>
        {isFetching ? (
          <p>fetching</p>
        ) : error ? (
          <p>Error</p>
        ) : trendingTvShows.results ? (
          <SwiperCardSlides movies={trendingTvShows.results} />
        ) : (
          <p>No trending movies yet</p>
        )}
      </div>
    </section>
  );
};

export default TrendingTVShowsSection;
