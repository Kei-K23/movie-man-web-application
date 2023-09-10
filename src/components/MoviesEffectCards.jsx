import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";

import { EffectCards } from "swiper/modules";

// Your component code
const MoviesEffectCards = ({ trendingMovies, setCurrentMovieSlide }) => {
  const handleSlideChange = (e) => {
    setCurrentMovieSlide(e.activeIndex);
  };

  return (
    <>
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper w-[200px] lg:w-[250px]"
        onSlideChange={(e) => handleSlideChange(e)}
      >
        {trendingMovies &&
          trendingMovies.map((movie) => (
            <SwiperSlide
              key={movie.id}
              className="w-full h-[300px] lg:h-[370px] rounded-2xl shadow-lg"
            >
              <img
                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              />
            </SwiperSlide>
          ))}
      </Swiper>
      ;
    </>
  );
};

export default MoviesEffectCards;
