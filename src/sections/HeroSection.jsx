import Search from "../components/Search";
import SwiperSlides from "../components/SwiperSlides";

const HeroSection = () => {
  return (
    <section className="relative ">
      <div className="layer"></div>
      <SwiperSlides />
      <div className="page-padding absolute top-1/4 md:left-9 lg:left-20 xl:left-36 z-[6]">
        <h1 className="mb-4 font-robotoSlab text-3xl lg:text-5xl  font-bold text-slate-100">
          Explore Movies and TV Shows with{" "}
          <span className="text-blue-500">Movie-Man</span>
        </h1>
        <h2 className="font-montserrat text-xl font-bold lg:text-2xl text-slate-200 mb-7">
          We provide thousand of Movies, TV shows for you
        </h2>
        <Search />
      </div>
    </section>
  );
};

export default HeroSection;
