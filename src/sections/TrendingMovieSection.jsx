import { useEffect, useState } from "react";
import { useLazyGetTrendingMoviesQuery } from "../features/movieAPI/movieApi";
import SwiperCardSlides from "../components/SwiperCardSlides";
import SwitchBtn from "../components/SwitchBtn";

const TrendingMovieSection = () => {
  const [getTrendingMovies, { error, isFetching }] =
    useLazyGetTrendingMoviesQuery();

  const [trendingMovies, setTrendingMovies] = useState({});
  const [switchTime, setSwitchTime] = useState("day");

  const handleRequest = async () => {
    const { data } = await getTrendingMovies({
      time: switchTime,
    });

    setTrendingMovies(data);
  };

  useEffect(() => {
    handleRequest();
  }, [switchTime]);

  return (
    <section className="page-padding my-10">
      <div className="flex items-center gap-10 mb-6">
        <h2 className="text-xl lg:text-2xl font-bold font-robotoSlab">
          Trending Movies
        </h2>
        <SwitchBtn switchTime={switchTime} setSwitchTime={setSwitchTime} />
      </div>
      <div>
        {isFetching ? (
          <p>fetching</p>
        ) : error ? (
          <p>Error</p>
        ) : trendingMovies.results ? (
          <SwiperCardSlides movies={trendingMovies.results} />
        ) : (
          <p>No trending movies yet</p>
        )}
      </div>
    </section>
  );
};

export default TrendingMovieSection;
