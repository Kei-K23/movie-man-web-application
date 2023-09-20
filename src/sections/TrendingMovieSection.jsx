import { useEffect, useState } from "react";

import SwiperCardSlides from "../components/SwiperCardSlides";
import SwitchBtn from "../components/SwitchBtn";
import { fetchDataFromEndPoints } from "../helper";
import { END_POINTS } from "../endpoints";

const TrendingMovieSection = ({ trendingMoviesData }) => {
  const [trendingMovies, setTrendingMovies] = useState({});
  const [switchTime, setSwitchTime] = useState("day");

  const handleChange = async (e) => {
    setSwitchTime(e);
    const data = await fetchDataFromEndPoints(
      END_POINTS.getTrendingMoviesAndTvShows("movie", e)
    );
    setTrendingMovies(data);
  };

  useEffect(() => {
    setTrendingMovies(trendingMoviesData);
  }, []);

  return (
    <section className="page-padding my-10">
      <div className="flex items-center gap-10 mb-6">
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
