import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";
import Card from "./Card";
import { Link } from "react-router-dom";
// import { useState } from "react";

const SwiperCardSlides = ({ movies }) => {
  return (
    <>
      <Swiper
        slidesPerView={2}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          850: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 30,
          },
          1280: {
            slidesPerView: 6,
            spaceBetween: 30,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {movies.map((movie) => {
          if (movie.credit_id) {
            return (
              <SwiperSlide key={movie.id} className="mb-10">
                <Card
                  title={movie.name}
                  poster_path={movie.profile_path}
                  release_date={movie.character}
                />
              </SwiperSlide>
            );
          } else {
            return (
              <SwiperSlide key={movie.id} className="mb-10">
                <Link
                  to={
                    movie.media_type === "tv"
                      ? `/tv_id/${movie.id}`
                      : `/movie_id/${movie.id}`
                  }
                >
                  <Card
                    title={
                      movie.media_type === "tv"
                        ? movie.name
                        : movie.title
                        ? movie.title
                        : movie.name
                    }
                    poster_path={movie.poster_path ?? movie.profile_path}
                    release_date={
                      movie.media_type === "tv"
                        ? movie.first_air_date
                        : movie.release_date
                        ? movie.release_date
                        : movie.character
                    }
                  />
                </Link>
              </SwiperSlide>
            );
          }
        })}
      </Swiper>
    </>
  );
};

export default SwiperCardSlides;
