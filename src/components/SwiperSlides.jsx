// import function to register Swiper custom elements
import { register } from "swiper/element/bundle";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";

// import required modules
import { Autoplay, FreeMode } from "swiper/modules";

register();

const SwiperSlides = () => {
  return (
    <div>
      <>
        <Swiper
          style={{
            "--swiper-navigation-color": "#fff",
            "--swiper-pagination-color": "#fff",
          }}
          loop={true}
          spaceBetween={10}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          modules={[FreeMode, Autoplay]}
          className="mySwiper2"
        >
          <SwiperSlide>
            <img
              className="h-[500px] lg:h-[700px] w-full"
              src="/8pjWz2lt29KyVGoq1mXYu6Br7dE.jpg"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="h-[500px] lg:h-[700px] w-full"
              src="/ctMserH8g2SeOAnCw5gFjdQF8mo.jpg"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="h-[500px] lg:h-[700px] w-full"
              src="/fm6KqXpk3M2HVveHwCrBSSBaO0V.jpg"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="h-[500px] lg:h-[700px] w-full"
              src="/jZIYaISP3GBSrVOPfrp98AMa8Ng.jpg"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="h-[500px] lg:h-[700px] w-full"
              src="/qEm4FrkGh7kGoEiBOyGYNielYVc.jpg"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="h-[500px] lg:h-[700px] w-full"
              src="/waBWlJlMpyFb7STkFHfFvJKgwww.jpg"
            />
          </SwiperSlide>
        </Swiper>
      </>
    </div>
  );
};

export default SwiperSlides;
